import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ModalDirective, ModalOptions } from 'ngx-bootstrap/modal';
import { ReportsComponent } from '../../../reports/reports.component';

@Component({
  selector: 'app-veteran-history',
  templateUrl: './veteran-history.component.html',
  styleUrls: ['./veteran-history.component.scss']
})
export class VeteranHistoryComponent implements OnInit {
  @ViewChild('addAnkleModal') private addAnkleModal: ModalDirective;
  @Input('chosenForms') chosenForms: ReportsComponent;

  toggleSection: boolean = true;
  vetHistoryForm: FormGroup;

  constructor( private _formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.vetHistoryForm = this._formBuilder.group({
      hasRecSubluxation: '', recSubluxationDetails: '',
      hasLatInstability: '', latInstabilityDetails: '',
      hasRecEffusion: '', recEffusionDetails: '',
      hasRecPatellar: '', recPatellarDetails: '',
      hasShinSplints: '', shinSplintsDetails: '',
      affectAnkleROM: '', affectAnkleROMDetails: '',
      hasStressFract: '', stressFractDetails: '',
      hasChronicExertional: '', chronicExertionalDetails: '',
      hasGenuRecurvatum: '', genuRecurvatumDetails: '',
      hasMeniscalDisc: '', meniscalDiscDetails: '',
      hasMeniscalTear: '', meniscalTearDetails: '',
      hasFreqJointLocking: '', freqJointLockingDetails: '',
      hasFreqJointPain: '', freqJointPainDetails: '',
    });
  };

  hideShowSection(){
    this.toggleSection = !this.toggleSection;
  }

  showAddAnkleModal(){
    this.addAnkleModal.show();
  }

  resetAndClose(){
    this.addAnkleModal.hide();
    this.vetHistoryForm.controls['affectAnkleROM'].setValue('na');
  }

  onSelectionChange(val){
    if(val == 'yes'){
      this.showAddAnkleModal();
    }
  }

  addAnkleModalToDbqArray(){
    console.log(JSON.stringify(this.chosenForms));
  }

}
