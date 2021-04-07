import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  [x: string]: any;
  private userName='maryammuchai';
  private clientId = 'e57c1b2aae512a8e0b5b'
  private clientSecret='aeb1040acfdcd7f83895ac7940da76d9d03225e7'

  

  constructor(private httpClient:HttpClient) { 

  }
  getUser(){
    return this._http.get('https://api.github.com/users/' + this.userName + '?client_id='
  + this.clientId + '&client_secret=' + this.clientSecret)
  .map((res: { json: () => any; }) => res.json());
  }

  getRepos(){
    return this._http.get("https://api.github.com/users/"+ this.userName + '/repos?client_id='
  + this.clientId + '&client_secret=' + this.clientSecret)
  .map((res: { json: () => any; }) => res.json());
 }
 updateUser(userName:string){
   this.userName = userName;

  }
  
  }




