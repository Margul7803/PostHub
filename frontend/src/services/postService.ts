import { apiClient } from "../config/apiConfig";

export const getPosts = async () => {
    try {
        const response = await apiClient.get("/posts");
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des tâches:", error);
        throw error;
    }
};

export const getPost = async (postId: any) => {
    try {
        const response = await apiClient.get(`/posts/${postId}`);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des tâches:", error);
        throw error;
    }
};

export const postPost = async (postData: any, token: any) => {
    try {
        const response = await apiClient.post("/posts",postData, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des tâches:", error);
        throw error;
    }
};

export const deletePost = async (postId: any) => {
    try {
        const response = await apiClient.delete(`/posts/${postId}`);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des tâches:", error);
        throw error;
    }
};
