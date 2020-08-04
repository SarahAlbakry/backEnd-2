import { User } from './../../user';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServesEmploeeService } from 'src/app/serves/serves-emploee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: ServesEmploeeService,
    private route: ActivatedRoute,
    private Router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    let islogined=this.userService.islogind();
    if(islogined)
    {
      this.Router.navigate(['/user']);
    }
    
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  login() {
    let data = this.loginForm.value;
    let user = new User(null, null, null, data.email, data.password);
    this.userService.LoginAdmin(user).subscribe(
      res => {
        console.log(res);
        let store = res.token;
        localStorage.setItem("mystore", store);
        this.Router.navigate(['/user']);
       

      },
      err => {
        console.log(err);

      }
    )

  }
  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }
  onReset() {
    this.loginForm.reset();
  }
}

