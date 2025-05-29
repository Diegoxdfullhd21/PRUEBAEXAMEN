import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InicioComponent } from './components/dashboard/inicio/inicio.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/dashboard/registro/registro.component';

export const routes: Routes = [
    {path: '',component: LoginComponent},
    {path: 'login',component: LoginComponent},
    {path: 'dashboard',component:DashboardComponent,children:[
        {path: '', component: InicioComponent},
        {path: 'inicio',component:InicioComponent},
        {path: 'usuarios',component:UsersComponent},
        {path:'registro',component:RegistroComponent}
    ]}
];
