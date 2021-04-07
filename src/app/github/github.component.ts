import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [GithubService],
})
export class GithubComponent implements OnInit {
  user: any;
  repos: any;
  userName: string='maryammuchai';

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getUser(this.userName).subscribe((user: any) => {
      this.user = user;
      console.log(user);
    });

    this.githubService.getRepos().subscribe((repos: any) => {
      this.repos = repos;
    });
  }

      findProfile(){

        this.githubService.updateUser(this.userName);

        this.githubService.getUser(this.userName).subscribe((user: any) => {
          this.user = user;
        });

        this.githubService.getRepos().subscribe((repos: any) => {

          this.repos = repos;
        });

  }
}
