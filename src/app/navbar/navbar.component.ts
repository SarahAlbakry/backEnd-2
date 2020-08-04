import { Router } from '@angular/router';
import { ServesEmploeeService } from 'src/app/serves/serves-emploee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 outlogined:boolean;
 myImage='assets/imges/angular_whiteTransparent.png';

  constructor(
    private userService:ServesEmploeeService,
    private Router:Router,
  ) { }

  ngOnInit(): void {
    this.outlogined=this.userService.islogind();

  }
  logout()
  {
    localStorage.removeItem("mystore");
    this.Router.navigate(['/Login']);
  }

  
}
