import { Component, OnInit, ViewChild } from '@angular/core';
import { BodyPart } from '../../models/bodypart';
import { ModalDirective, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  @ViewChild('addFormModal') private addFormModal: ModalDirective;

  chosenForms: BodyPart[] = [];
  bodyPart: BodyPart;
  selected_games: any[]=[];

  constructor() {
    this.name = `Angular!`;
    this.getSelected();
  }

  ngOnInit() {
    this.bodyPart = {
      code: 'GEN',
      label: 'Intake Form',
    }
    this.chosenForms.push(this.bodyPart);

    this.bodyPart = {
      code: 'KNE',
      label: 'Knee',
    }
    this.chosenForms.push(this.bodyPart);

    // this.bodyPart = {
    //   code: 'ANK',
    //   label: 'Ankle',
    // }
    // this.chosenForms.push(this.bodyPart);
  }

  addForm(){
    this.addFormModal.show();
  }

  resetAndClose(){
    this.addFormModal.hide();
  }

  name: string;
  searchText: string = "";
  selected_count: number = 0;
 
 
  // Data Object to List Games
  games = [
    {
      name: 'Chess',
      id: 1,
      selected: true
    },
    {
      name: 'Ludo',
      id: 2,
      selected: false
    },
    {
      name: 'Snakes & Ladders',
      id: 3,
      selected: false
    },
    {
      name: 'Carrom',
      id: 4,
      selected: false
    },
    {
      name: 'Scrabble',
      id: 5,
      selected: false
    },
    {
      name: 'Monopoly',
      id: 6,
      selected: true
    },
    {
      name: 'Uno',
      id: 7,
      selected: false
    }
  ]
 
  // Getting Selected Games and Count
  getSelected() {
    this.selected_games = this.games.filter(s => {
      return s.selected;
    });
    this.selected_count = this.selected_games.length;
    //alert(this.selected_games);    
  }
 
  // Clearing All Selections
  clearSelection() {
    this.searchText = "";
    this.games = this.games.filter(g => {
      g.selected = false;
      return true;
    });
    this.getSelected();
  }
 
  //Delete Single Listed Game Tag
  deleteGame(id: number) {
    this.searchText = "";
    this.games = this.games.filter(g => {
      if (g.id == id)
        g.selected = false;
 
      return true;
    });
    this.getSelected();
  }
 
  //Clear term types by user
  clearFilter() {
    this.searchText = "";
  }

  selectItem(g){
    console.log(g);
    g = true;
  }
 
 
}


