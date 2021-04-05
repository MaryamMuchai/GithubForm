import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { count } from 'node:console';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient:HttpClient) { }

  //for github profile
  public getProfile(searchQuery):Observable<any>{
    let dataURL ='https://api.github.com/users/${searchQuery}';
    return this.httpClient.get<any>(dataURL).pipe(
      retry(count: 1),
      catchError(this.handleErrors)
    );
  }
  //for github repos
  public getRepos(searchQuery):Observable<any>{
    let dataURL ='https://api.github.com/users/${searchQuery}/repos';
    return this.httpClient.get<any>(dataURL).pipe(
      retry(count 1),
      catchError(this.handleErrors)
  };
    let errorMessage:string;
    if(error.console.error instanceof ErrorEvent){
//client side error
  errorMessage = `MESSAGE : $[error.error.message}`;
    }
    else{
      //server side error
      errorMessage = `STATUS : ${error.status} MESSAGE: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
