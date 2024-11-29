import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../../style/user/UserView.scss";
import { useDispatch } from "react-redux";
import * as yup from 'yup';

const UserView = () => {
    const [user, setUser] = useState(null);
    const { userId } = useParams();
    const dispatch = useDispatch();
    const inputFileRef = useRef(null);

    const [avatar, setAvatar] = useState(null);
    const [name, setName] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const [updateUserMessage, setUpdateUserMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [validation, setValidation] = useState(false);

    // Fetch user data
    const fetchUserData = async () => {
        console.log("check userId >>>", userId)
        try {
            const response = await axios.get(`http://localhost:3003/api/v1/user/${userId}`);
            const userData = response.data;
            setUser(userData);
            setName(userData.name || '');
            setEmail(userData.email || '');
            setPhoneNumber(userData.phonenumber || '');
            setAddress(userData.address || '');
        } catch (error) {
            console.error('Error fetching user information:', error);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, [userId]);

    // Handle image upload
    const handleImageClick = () => {
        inputFileRef.current?.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                dispatch({ type: "SET_SELECTED_IMAGE", payload: reader.result });
            };
            reader.readAsDataURL(file);
            setAvatar(file);
        }
    };

    // Input change handlers
    const handleInputChange = (setter) => (e) => setter(e.target.value);

    // Validation schema
    const validationSchema = yup.object().shape({
        name: yup.string().required('Name is required'),
        email: yup.string()
            .matches(
                /^[\w.%+-]+@(gmail\.com|outlook\.com|hotmail\.com|yahoo\.com|protonmail\.com|mail\.ru|web\.de|usa\.com)$/,
                'Invalid email'
            )
            .required('Email is required'),
        phonenumber: yup.string()
            .matches(/^\d{7,11}$/, 'Invalid phone number')
            .required('Phone number is required'),
    });

    // Submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await validationSchema.validate({ name, email, phonenumber, address }, { abortEarly: false });

            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('phonenumber', phonenumber);
            formData.append('address', address);
            if (avatar) {
                formData.append('file', avatar);
            }

            const response = await axios.put(`http://localhost:3003/api/v1/user/${userId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Response:', response.data);
            dispatch({ type: "CLEAR_SELECTED_IMAGE" });
            setUpdateUserMessage('Update successful!');
            setShowAlert(true);
            fetchUserData();
            alert("cập nhật thành công");
            resetForm();
        } catch (error) {
            console.error('Error:', error);
            handleError(error);
        }
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setPhoneNumber('');
        setAddress('');
        setAvatar(null);
    };

    const handleError = (error) => {
        if (error instanceof yup.ValidationError) {
            const validationErrors = error.inner.map(err => err.message);
            setUpdateUserMessage('Validation error: ' + validationErrors.join(', '));
            setValidation(true);
        } else {
            setUpdateUserMessage('An error occurred while updating the user.');
        }
    };



    return (
        <form className="user-container" onSubmit={handleSubmit}>
            {user ? (
                <div className="row">
                    <div className="col-sm-8">
                        <div className="ava-header">
                            <div className="image">
                                <img src={avatar ? URL.createObjectURL(avatar) : user?.avatar} alt={user?.name} className="avatar" />
                                <img className="icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1730860156/camera_685655_bspmgz.png" onClick={handleImageClick} alt="Upload" />
                                <input ref={inputFileRef} type="file" name="image" style={{ display: 'none' }} onChange={handleImageChange} />
                            </div>
                            <div className="name">
                                <h2>
                                    <input type="text" name="name" value={name} onChange={handleInputChange(setName)} />
                                </h2>
                            </div>
                        </div>
                        <div className="email">
                            <h5>Email:</h5>
                            <input type="text" name="email" value={email} onChange={handleInputChange(setEmail)} />
                        </div>
                        <div className="phone-number">
                            <h5>Phone number:</h5>
                            <input type="text" name="phonenumber" value={phonenumber} onChange={handleInputChange(setPhoneNumber)} />
                        </div>
                        <div className="email">
                            <h5>Address:</h5>
                            <input type="text" name="address" value={address} onChange={handleInputChange(setAddress)} />
                        </div>
                        <button className="btn" type="submit">Save</button>
                    </div>
                    {showAlert && (
                        <div className="col-sm-2">
                            <div className="successful">
                                <div className="Update"> Update successful </div>
                                <button onClick={() => setShowAlert(false)}>ok</button>
                            </div>
                        </div>
                    )}
                    {validation && (
                        <div className="col-sm-3">
                            <div className="successful">
                                <div className="Update"> Validation error </div>
                                <button onClick={() => setValidation(false)}>ok</button>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </form>
    );
};

export default UserView;