import { createSlice } from '@reduxjs/toolkit';

// Khởi tạo trạng thái mặc định
const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null, // Lấy user từ localStorage nếu có
    isAuthenticated: !!localStorage.getItem('user'), // Xác định trạng thái đăng nhập dựa trên localStorage
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart(state) {
            state.loading = true;
            state.error = null;
        },
        loginSuccess(state, action) {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload; // Người dùng sau khi đăng nhập
            localStorage.setItem('user', JSON.stringify(action.payload)); // Lưu user vào localStorage
        },
        loginFailure(state, action) {
            state.loading = false;
            state.error = action.payload; // Lỗi đăng nhập
        },
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem('user'); // Xóa localStorage khi đăng xuất
        },
        checkAuth(state) {
            state.isAuthenticated = !!state.user; // Kiểm tra xem user có tồn tại không
        },
    },
});

// Xuất các action
export const {
    loginStart,
    loginSuccess,
    loginFailure,
    logout,
    checkAuth,
} = authSlice.actions;

// Xuất reducer
export default authSlice.reducer;