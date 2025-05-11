import { useState } from "react";
import authService from "../../services/login/AuthService";

export function useAuth() {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);

   const login = async (email: string, password: string) => {
      try {
         setLoading(true);
         setError(null);
         const userData = await authService(email, password);
         return userData;
      } catch (err: any) {
         const errorMessage = err.response?.data || "Erro inesperado";
         setError(errorMessage);
         console.log("Erro do backend:", err.response?.data);
         throw err;
      } finally {
         setLoading(false);
      }
   };

   return { login, loading, error };
}