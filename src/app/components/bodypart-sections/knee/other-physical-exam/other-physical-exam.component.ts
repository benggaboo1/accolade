import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ModalDirective, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-other-physical-exam',
  templateUrl: './other-physical-exam.component.html',
  styleUrls: ['./other-physical-exam.component.scss']
})
export class OtherPhysicalExamComponent implements OnInit {
  @ViewChild('addScarModal') private addScarModal: ModalDirective;

  toggleSection: boolean = true;
  otherPhysicalExamForm: FormGroup;

  constructor( private _formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.otherPhysicalExamForm = this._formBuilder.group({
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

  showAddScarModal(){
    this.addScarModal.show();
  }

  resetAndClose(){
    this.addScarModal.hide();
    this.otherPhysicalExamForm.controls['scarPainRight'].setValue('no');
    this.otherPhysicalExamForm.controls['scarPainLeft'].setValue('no');
  }

  onScarRadioChange(right, left){
    if(right == 'yes' || left == "yes"){
      this.showAddScarModal();
    }
  }



}
