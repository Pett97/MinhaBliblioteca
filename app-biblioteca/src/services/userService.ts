import { USER_LINK } from "./api-endpoint";
import { CreateUser } from "./user/create.user";
import axios, { Axios } from "axios";

class UserService {
   private myAxios: Axios;
   constructor() {
      this.myAxios = axios.create({
         baseURL: USER_LINK,
      });
   }

   public async createUser(data: any) {
      const newUser = new CreateUser(data.name, data.email, data.password, data.password_confirmation);

      if (!newUser.validationFields) {
         return;
      }

      try {
         const response = await this.myAxios.post(USER_LINK, { newUser });
         return response.data;
      } catch (error) {
         console.log(error);
         throw error;
      }
   }
}