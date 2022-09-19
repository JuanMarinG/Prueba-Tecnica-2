import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  }
  username?: string;
  password?: string;

  constructor(private authService: AuthService, private router: Router) { }

  TOKEN:string = "auth-token"
  USERNAME:string = "auth-username"

  ngOnInit(): void {
    if(window.sessionStorage.getItem(this.TOKEN))
      this.router.navigate(['/home']);
  }
  onSubmit(): void{
    console.log("LOGIN")
    this.authService.login(this.form.username, this.form.password)
      .subscribe(
        response => {

          window.sessionStorage.setItem(this.TOKEN, response.token);
          window.sessionStorage.setItem(this.USERNAME, this.form.username);
          console.log(window.sessionStorage.getItem(this.TOKEN))
          console.log(window.sessionStorage.getItem(this.USERNAME));
        },
        error => {
          // gestionar error
          console.log(error)
        });
  }

}
