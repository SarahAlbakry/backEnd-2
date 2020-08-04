import { Component, OnInit } from '@angular/core';
import { ServesEmploeeService } from 'src/app/serves/serves-emploee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

 userDetails=[];

  constructor(
    private userService: ServesEmploeeService,
    private router: Router,
    private route:ActivatedRoute,

  ) { }

  ngOnInit(): void {

    let idUser=this.route.snapshot.params.id;
   console.log(idUser);
   
   this.userService.OneUser(idUser).subscribe(
    res=>{
      this.userDetails= res;
      console.log(this.userDetails);
      
    },
    err=>{
      console.log(err);
    });

  }

}
