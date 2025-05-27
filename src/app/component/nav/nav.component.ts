import { Component, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.component.html',
})
export class NavComponent {
  _auth = inject(AuthService);
  auth = inject(Auth);
  logueado: boolean=true;

  ngOnInit(): void {
    this.getLogin();
  }
  
  getLogin(){
    if(this.auth.currentUser?.email == null){
      this.logueado= false;
    }else{
      this.logueado= true;
    } 
    console.log(this.logueado) ;
  }    
  logout(){
    this._auth.cerrarSesion();
    window.location.reload();
  }
  constructor(private router: Router) {}
}
