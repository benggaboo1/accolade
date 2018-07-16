import { Component, OnInit, ViewChild } from '@angular/core';

import { GeneralComponent } from '../../components/bodyparts/general/general.component';
import { AnkleComponent } from '../../components/bodyparts/ankle/ankle.component';


@Component({
  selector: 'app-accforms',
  templateUrl: './accForms.component.html',
  styleUrls: ['./accForms.component.scss']
})
export class AccFormsComponent implements OnInit {

  constructor() {

  }

  ngAfterViewInit() {
  }

  ngOnInit() {
  }
  
}
