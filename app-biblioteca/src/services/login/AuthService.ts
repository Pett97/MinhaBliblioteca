import api from "../api";

const authService = async (email: string, password: string) => {
   const response = await api.post("/api/user/login", { email, password });
   return response.data;
};

export default authService;