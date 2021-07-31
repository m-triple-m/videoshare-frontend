import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { app_config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  url= app_config.api_url;

  constructor(private http: HttpClient) { }

  addVideo(data : any) : Observable<any>{
    console.log(data);
    return this.http.post( this.url+'/video/add',data);
  }

  getVideosByUser( userid: any){
      return this.http.get(this.url+'/video/getbyuser/'+userid);
  }
  getVideoById( id: any){
    return this.http.get(this.url+'/video/getbyid/'+id);
}
  addUser( id:any,data:any){
    return this.http.put(this.url + '/video/pushupdate/'+id,data);
  }
}