import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {
 public githubUserQuery!: string;
 public githubProfile:any;
 public githubRepos!: any[];
 public errorMessage!: string; 

  constructor(private githubService:GithubService) { 

 


  }


  ngOnInit(): void {
  }

}



