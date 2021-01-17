import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Edict {
  name: string;
  closingDate: string;
  progress: string;
  pendencies: string
}

const ELEMENT_DATA: Edict[] = [
  {name: 'Klabin Transforma - Banco de Projetos', closingDate: '31/05/21', progress: "80%", pendencies: 'justificativa, currículo'},
  {name: 'EDITAL FUNDO NOSSA PARTE PELO TODO IBRF 2021', closingDate: '31/05/21', progress: "80%", pendencies: 'justificativa, currículo'}
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name'];
  dataSource = ELEMENT_DATA;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.router.navigateByUrl('/dashboard');
  }
}
