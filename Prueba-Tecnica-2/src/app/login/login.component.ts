import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { token, username } from '../constantes';
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

  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit(): void {
    if(window.sessionStorage.getItem(token))
      this.router.navigate(['/home']);
  }
  onSubmit(): void{
    console.log("LOGIN")
    this.authService.login(this.log.username, this.log.password)
      .subscribe(
        response => {

          window.sessionStorage.setItem(token, response.token);
          window.sessionStorage.setItem(username, this.log.username);
          console.log(window.sessionStorage.getItem(token))
          console.log(window.sessionStorage.getItem(username));
        },
        error => {
          // gestionar error
          console.log(error)
        });
  }

}
