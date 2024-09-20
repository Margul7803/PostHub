import { apiClient } from "../config/apiConfig";

export const postRegister = async (userData: any) => {
    try {
        const response = await apiClient.post("/auth/register", userData);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des tâches:", error);
        throw error;
    }
};

export const postLogin = async (userData: any) => {
    try {
        const response = await apiClient.post("/auth/login", userData);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la création de la tâche:", error);
        throw error;
    }
};
