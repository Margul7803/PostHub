import { apiClient } from "../config/apiConfig";

export const getProfile = async () => {
    try {
        const response = await apiClient.get("/profile/me");
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des tâches:", error);
        throw error;
    }
};

export const patchProfile = async (taskData: any) => {
    try {
        const response = await apiClient.patch("/profile/me", taskData);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la création de la tâche:", error);
        throw error;
    }
};

export const deleteProfile = async (id: any) => {
    try {
        await apiClient.delete("/profile/me", { data: { id } });
    } catch (error) {
        console.error("Erreur lors de la suppression de la tâche:", error);
        throw error;
    }
};
