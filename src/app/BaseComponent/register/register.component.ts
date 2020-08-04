import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ServesEmploeeService } from 'src/app/serves/serves-emploee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private userService:ServesEmploeeService,
    private route:ActivatedRoute,
    private Router:Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {

    let islogined=this.userService.islogind();
    if(islogined)
    {
      this.Router.navigate(['/user']);
    }
    
  }
  registerForm=new FormGroup({
    firstname: new FormControl('',[
      Validators.required,
      Validators.pattern("[A-Za-z .'-]+"),
      Validators.minLength(2)
    ]),
    lastname: new FormControl('',[
      Validators.required,
      Validators.pattern("[A-Za-z .'-]+"),
      Validators.minLength(2)
    ]),
    phone: new FormControl('',[
      Validators.required,
      Validators.pattern("[0-9]+"),
      Validators.minLength(8),
      Validators.maxLength(13)
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]),
    repassword: new FormControl('',[
      Validators.required,
    ])
  });

  get firstname() { return this.registerForm.get('firstname') }
  get lastname() { return this.registerForm.get('lastname') }
  get phone() { return this.registerForm.get('phone') }
  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }
  get repassword() { return this.registerForm.get('repassword') }



  register() {

    let data = this.registerForm.value;

    let user = new User(data.firstname,data.lastname,data.phone,data.email,data.password);

    this.userService.RegisterAdmin(user).subscribe(
      res=>{
        this.toastr.success(res.message);
        this.Router.navigate(['/Login']);
      },
      err=>{
        console.log(err);
      }
    )
    
  }
  

}
