import { Router } from '@angular/router';
import { User } from './../../user';
import { ServesEmploeeService } from './../../serves/serves-emploee.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userList = [];
  constructor(
    private user: ServesEmploeeService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.user.getUser().subscribe(
      res => {
        this.userList = res;
      },
      err => {
        console.log(err);

      });
  }
  addUserForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern("[a-z .'-]+")]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern("[a-z .'-]+")]),
    phone: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(13), Validators.pattern("[0-9]+")]),
  });

  get f() { return this.addUserForm.controls; }
  Delete(user) {
    let index = this.userList.indexOf(user);
    this.userList.splice(index, 1);

    this.user.deleteUser(user._id).subscribe(
      res => {
        
        this.toastr.error(res.message);

      },
      err => {
        console.log(err);

      })
  }
  addUser() {
    let data = this.addUserForm.value;
    let user = new User(data.firstname, data.lastname, data.phone);
    this.user.addUser(user).subscribe(
      res => {
        // this.router.navigate(["/user"]);
        this.ngOnInit();
        console.log(res);
        this.toastr.success(res.message);
      },
      err => {
        console.log(err);
      }
    );
  }
  onReset() {
    return this.addUserForm.reset();
  }
}
