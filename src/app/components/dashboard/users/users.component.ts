import { Component ,OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { UserService } from '../../../services/user.service';

export interface PeriodicElement {
  nombres: string;
  id: number;
  apellidoP: string;
  apellidoM: string;
}

export interface Usuario {
  nombres: string;
  apellidoP: string;
  apellidoM: string;
  genero: string;
  correo: string;
  contrasena: string;
}






@Component({
  selector: 'app-users',
  imports: [MatTableModule,MatIconModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent  implements OnInit {
  displayedColumns: string[] = ['id', 'nombres', 'apellidoP', 'apellidoM','correo','actions'];
  /*dataSource: PeriodicElement[] = [];*/
  dataSource: Usuario[] = [];
  constructor(private userService: UserService) {}
 
  ngOnInit() {


  /*
    this.userService.getUsers().subscribe(data => {
      this.dataSource = data;
    }); */

    const usuariosGuardados = localStorage.getItem('usuarios');
    if (usuariosGuardados) {
      this.dataSource = JSON.parse(usuariosGuardados);
    } else {
      this.dataSource = []; 
    }
  }


  buscarUsuario(usuario: Usuario) {
    alert(`Buscando usuario: ${usuario.nombres} ${usuario.apellidoP} ${usuario.apellidoM}`);
   
  }
  
  editarUsuario(usuario: Usuario) {
    alert(`Editar usuario: ${usuario.nombres} ${usuario.apellidoP}`);
  
  }
  
  eliminarUsuario(usuario: Usuario) {
    const confirmacion = confirm(`¿Seguro que quieres eliminar a ${usuario.nombres}?`);
    if (confirmacion) {
     
      this.dataSource = this.dataSource.filter(u => u !== usuario);
      localStorage.setItem('usuarios', JSON.stringify(this.dataSource));
    }
  }
}
