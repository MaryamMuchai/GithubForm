import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  [x: string]: any;

  constructor(private httpClient:HttpClient) { }

  
}

