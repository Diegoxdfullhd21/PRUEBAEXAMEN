import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule,MatButtonModule,MatIconModule, RouterLink,MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor( private router:Router){

  }
  logout() {
    
    alert("Saliendo.")
    this.router.navigate(['/login']);
  }
}