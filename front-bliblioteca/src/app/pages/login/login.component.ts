import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppConstants } from '../../app-constants';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private http: HttpClient, private appConstants: AppConstants, private router: Router) { }

  loginObj: any = {
    email: "",
    password: ""
  }

  onLogin() {
    this.http.post(this.appConstants.loginUrl, this.loginObj).subscribe((res: any) => {
      if (res.token) {
        this.saveTokenToLocaHost(res.token)
        this.router.navigate(["generos"])
      }
      console.log(res.token);
    });
  }

  private saveTokenToLocaHost(token: string): void {
    localStorage.setItem("meuToken", token)
  }
}
