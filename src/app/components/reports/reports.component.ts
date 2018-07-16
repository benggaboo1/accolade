import { Component, OnInit, ViewChild } from '@angular/core';
import { BodyPart } from '../../models/bodypart';
import { ModalDirective, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  @ViewChild('addFormModal') public addFormModal: ModalDirective;

  chosenForms: BodyPart[] = [];
  general: BodyPart;
  ankle: BodyPart;
  knee: BodyPart;

  constructor() {
  }

  ngOnInit() {
    this.general = {
      id: 1,
      code: 'general',
      routerlink: "['general']",
      label: 'General',
    }
    this.ankle = {
      id: 2,
      code: 'ankle',
      routerlink: "['ankle']",
      label: 'Ankle',
    }
    this.knee = {
      id: 2,
      code: 'knee',
      routerlink: "['knee']",
      label: 'Knee',
    }
    this.chosenForms.push(this.general);
    this.chosenForms.push(this.knee);
    this.chosenForms.push(this.ankle);
  }

  addForm(){
    this.addFormModal.show();
  }

  resetAndClose(){
    this.addFormModal.hide();
  }

}
