import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],

  providers:[GithubService]
  
})
export class GithubAppComponent implements OnInit {
      user: any;
      repos: any;
      userName!: string;
    
      constructor(private githubService:GithubService) {
        this.githubService.getUser().subscribe((user: any) => {
          
          this.user = user;
        });
    
        this.githubService.getRepos().subscribe((repos: any) => {
          
          this.repos = repos;
        });
    
      }
        
      findProfile(){
    
        this.githubService.updateUser(this.userName);
    
        this.githubService.getUser().subscribe((user: any) => {
          
          this.user = user;
        });
    
        this.githubService.getRepos().subscribe((repos: any) => {
          
          this.repos = repos;
        });


  }


  ngOnInit(): void {
  }

}



