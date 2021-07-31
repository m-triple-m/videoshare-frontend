import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { app_config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  url= app_config.api_url;
  constructor(private http: HttpClient) { }

  addUser(data : any) : Observable<any>{
    return this.http.post( this.url+'/user/add',data);
  }
  addFile(data : any): Observable<any>{
    return this.http.post( this.url+'/util/addfile', data);
  }
  getUserByEmail(email: any)
  {
    return this.http.get(this.url+'/user/getbyemail/'+email);
    
  }

}
