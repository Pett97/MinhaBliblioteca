import { USER_LINK } from '../api-endpoint';

class CreateUser {
   private name: string;
   private email: string;
   private password: string;
   private password_confirmation: string
   private errosArray: string[] = [];
   private token: string = "";

   constructor(name: string, email: string, password: string, password_confirmation: string) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.password_confirmation = password_confirmation;
   }

   public async getToken(): Promise<String | null> {
      await this.createUser();
      return this.token ? this.token : null;
   }

   private async createUser(): Promise<Boolean> {
      if (this.validationFields()) {
         try {
            let data = await fetch(`${USER_LINK}/create`, {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  name: this.name,
                  email: this.email,
                  password: this.password,
                  password_confirmation: this.password_confirmation
               })
            });

            const response = await data.json();
            if (response.user && response.user.token) {
               this.token = response.user.token;
               return true
            } else {
               return false;
            }
         } catch (error) {
            console.error("Erro ao criar o usuário:", error);
            return false;
         }
      } else {
         return false;
      }
   }

   private validationFields(): boolean {
      this.errosArray = [];
      if (!this.name.trim()) {
         this.errosArray.push("O nome não pode estar vazio");
      }
      if (!this.email.trim()) {
         this.errosArray.push("O email não pode estar vazio");
      }
      if (!this.password.trim()) {
         this.errosArray.push("A senha não pode estar vazia");
      }
      if (!this.password_confirmation.trim()) {
         this.errosArray.push("a confirmacao da senha não pode estar vazia");
      }
      if (this.password !== this.password_confirmation) {
         this.errosArray.push("as senhas nao são iguais");
      }

      if (this.errosArray.length == 0) {
         return true;
      }
      else {
         console.table(this.errosArray);
         return false
      }
   }
}

//(async () => {
//   const leleco = new CreateUser("ana25", "ana25@gmail.com", "912415065", "912415065");
//   const token = await leleco.getToken(); 
//})();
