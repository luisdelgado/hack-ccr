import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Edict {
  name: string;
  closingDate: string;
  progress: string;
  pendencies: string
}

const ELEMENT_DATA: Edict[] = [
  {name: 'Edital 1', closingDate: '31/05/21', progress: "80%", pendencies: 'justificativa, currículo'}
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['name', 'progress'];
  dataSource = ELEMENT_DATA;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  projects() {
    this.router.navigateByUrl('/projects');
  }
}
