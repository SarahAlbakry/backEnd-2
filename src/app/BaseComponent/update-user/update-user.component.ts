import { Router, ActivatedRoute } from '@angular/router';
import { ServesEmploeeService } from './../../serves/serves-emploee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  constructor( 
    private userService:ServesEmploeeService,
    private route:ActivatedRoute,
    private Router:Router,
    private toastr: ToastrService,

  ) { }

  ngOnInit(): void {

    let idUser = this.route.snapshot.params.id;
    
    this.userService.OneUser(idUser).subscribe(
      res=>{
        let user = res;

        this.updateUserForm.patchValue({
          firstname : user.firstname,
          lastname : user.lastname ,
          phone : user.phone
        })
        
      },
      err=>{
        console.log(err);
      }
    )

    
  }



  updateUserForm=new FormGroup({
    firstname:new FormControl('',[
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
});



get firstname() { return this.updateUserForm.get('firstname') }
get lastname() { return this.updateUserForm.get('lastname') }
get phone() { return this.updateUserForm.get('phone') }

updateUser()
{
  let data=this.updateUserForm.value;
  let idUser=this.route.snapshot.params.id;
  let user=new User(data.firstname,data.lastname,data.phone,null,null,idUser);
  this.userService.UpdateUser(user).subscribe(
    res=>{
      console.log(res);
      this.Router.navigate(['/user']);
      this.toastr.warning(res.message);

    },
    err=>
    {
      console.log(err);
      
    }
  )

}


onReset()
{
  this.updateUserForm.reset();
}
}
