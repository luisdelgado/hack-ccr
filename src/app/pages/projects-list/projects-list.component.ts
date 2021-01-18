import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  back() {
    this.router.navigateByUrl('/dashboard');
  }
}
