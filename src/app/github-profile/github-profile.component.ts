import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css'],
  providers:[GithubService]
})
export class GithubProfileComponent implements OnInit {


  constructor( private githubService: GithubService) { }
 
  ngOnInit(): void {
  }

}
