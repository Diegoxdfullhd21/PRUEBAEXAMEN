import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeriodicElement } from '../components/dashboard/users/users.component';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<PeriodicElement[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users =>
        users.map(user => {
          const [nombre, apellidoP, apellidoM = ''] = user.name.split(' ');
          return {
            id: user.id,
            nombres: nombre,
            apellidoP: apellidoP,
            apellidoM: apellidoM,
          };
        })
      )
    );
  }
}
