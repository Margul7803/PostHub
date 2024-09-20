import { apiClient } from "../config/apiConfig";

export const getComments = async (commentId: any) => {
    try {
        const response = await apiClient.get(`/comments/${commentId}`);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des tâches:", error);
        throw error;
    }
};

export const postComment = async (commentData: any) => {
    try {
        const response = await apiClient.post("/comments", commentData);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des tâches:", error);
        throw error;
    }
};

export const deleteComment = async (commentId: any) => {
    try {
        const response = await apiClient.delete(`/comments/${commentId}`);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des tâches:", error);
        throw error;
    }
};
