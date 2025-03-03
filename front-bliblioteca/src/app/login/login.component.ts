import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],  // Não precisa do HttpClientModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  applyForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService 
  ) {
    this.applyForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  realizarLogin() {
    if (this.applyForm.valid) {
      const credentials = this.applyForm.value; 
      this.authService.login(credentials).subscribe(resposta=>{
        if(resposta.body.message === "Não Foi encontrado nenhum usuario com esse email"){
          alert("Não Foi encontrado nenhum usuario com esse email");
        }else{
          console.log(resposta.body);
        }
      })
    } else {
      alert("Verifique os Dados Preenchidos");
    }
  }
}
