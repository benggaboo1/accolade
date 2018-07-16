import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-complications',
  templateUrl: './complications.component.html',
  styleUrls: ['./complications.component.scss']
})
export class ComplicationsComponent implements OnInit {

  toggleSection: boolean = true;
  disabilitiesForm: FormGroup;

  constructor( private _formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.disabilitiesForm = this._formBuilder.group({
      crepitusRight: '', crepitusLeft: '', crepitusComment:'',
      tendernessRight: '', tendernessLeft: '', tendernessComment: '',
      tendernessLocRight: '', tendernessSevRight: '',
      tendernessLocLeft: '', tendernessSevLeft: '',
      tendernessLocComment: '', tendernessSevComment: '',
      weightBearingRight: '', weightBearingLeft: '', weightBearingComment:'',
      nonWeightBearingRight: '', nonWeightBearingLeft: '', nonWeightBearingComment:'',
      swellingRight: '', swellingLeft: '', swellingComment:'',
      atrophyRight: '', atrophyLeft: '', atrophyComment: '',
      atrophyLocRight: '', atrophyMeasRight: '',
      atrophyLocLeft: '', atrophyMeasLeft: '',
      atrophyLocComment: '', atrophyMeasComment: '',
      deformityRight: '', deformityLeft: '', deformityComment:'',
      gaitRight: '', gaitLeft: '', gaitComment:'',
      legLengthRight: '', legLengthLeft: '', legLengthComment: '',
      legLengthMeasRight: '', legLengthMeasLeft: '',
      scarRight: '', scarLeft: '', scarComment: '',
      scarLocRight: '', scarMeasRight: '',
      scarLocLeft: '', scarMeasLeft: '',
      scarLocComment: '', scarMeasComment: '',
      scarPainRight: '', scarPainLeft: '', scarPainComment:'',
    });
  };

  hideShowSection(){
    this.toggleSection = !this.toggleSection;
  }

}
