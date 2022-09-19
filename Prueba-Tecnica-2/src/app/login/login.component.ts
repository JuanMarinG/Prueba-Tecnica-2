import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { token, username } from '../constantes';
import { LoginService } from '../services/login.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  log: any = {
    username: '',
    password: ''
  }

  token:any;

  constructor(private loginService: LoginService, private router: Router) { }


  ngOnInit(): void {
    if(window.sessionStorage.getItem(token))
      this.router.navigate(['/home']);
  }
  loginUser(): void {
    const data = {
      username: this.log.username,
      password: this.log.password,
      request_token: this.token
    };
    this.loginService.signup(data)
      .subscribe(
        response => {
          this.token = response;
          console.log(response);
          window.sessionStorage.setItem(token, response.request_token);
          window.sessionStorage.setItem(username, this.log.username);
          window.location.reload()
        },
        error => {
          this.log = {
            username: '',
            password: ''
          };
        });
  }

}
