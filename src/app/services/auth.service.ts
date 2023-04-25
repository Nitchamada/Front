import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private Http:HttpClient) { }

  getAll(){
    return this.Http.get('')
  }

  register( obj:any ){
    return this.Http.post('', obj)
  }
}
