import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isConnected:boolean;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.isConnected.subscribe(res=>{
      this.isConnected=res;
    })
  }

  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.router.navigate(['/login']);
      this.authService.isConnected.next(false);
    }, (error) => {
      console.log("Logout error", error);
    });
  }

}