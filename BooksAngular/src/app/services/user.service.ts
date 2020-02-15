import { User } from './../model/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUser(id: any): Observable<User> {
    return this.http.get<User>(environment["baseUrlService"] + '/davedere/' + id);
  }
  
  delete(id: any): Observable<User> {
    return this.http.delete<User>(environment["baseUrlService"]  + '/davedere/'  +id);
  }

   add(user: User): Observable<User> {
   return this.http.post<User>(environment["baseUrlService"] +'/davedere/', user);

   }
}
