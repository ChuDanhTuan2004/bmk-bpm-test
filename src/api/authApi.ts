import api from './axiosInstance';

export interface LoginRequest {
    username: string;
    password: string;
    isGuest?: boolean;
    isRemeberMe?: boolean;
    rememberMe?: boolean;
}

export interface LoginResponse {
    id_token: string;
}

export const loginApi = async (data: LoginRequest): Promise<LoginResponse> => {
    const res = await api.post('/api/authenticate', {
        username: data.username,
        password: data.password,
        isGuest: data.isGuest || false,
        isRemeberMe: data.isRemeberMe || false,
        rememberMe: data.rememberMe || false
    });
    return res.data;
};
