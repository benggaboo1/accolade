import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.scss']
})
export class MedicalHistoryComponent implements OnInit {

  toggleSection: boolean = true;
  medHistoryForm: FormGroup;
  finalDiagnoses: FormArray;
  diagnoses: FormArray;

  constructor( private _formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.medHistoryForm = this._formBuilder.group({
      finalDiagnoses: this._formBuilder.array([ this.createFinalDiagnoses() ]),
      diagnoses: this._formBuilder.array([ this.createDiagnoses() ]),
      dateOfOnsetRight: '', dateOfOnsetLeft: '',
      detailsOfOnsetRight: '', detailsOfOnsetLeft: '',
      currentSympRight: '', currentSympLeft: '',
      sympProgressRight: '', sympProgressLeft: '',
      medications: '',
      priorTreatments: '',
      flareUpsImpactSelect: '', flareUpsImpact: '', 
      lossImparementSelect: '', lossImparement: '', 
      flareUpLimitSelect: '', flareUpLimit: '', 
      repUseLimitSelect: '', repUseLimit: '', 
      evidenceComments: '',
    });
  };

  hideShowSection(){
    this.toggleSection = !this.toggleSection;
  }

  createFinalDiagnoses(): FormGroup {
    return this._formBuilder.group({
      finalDiagnosis: '',
    });
  }

  createDiagnoses(): FormGroup {
    return this._formBuilder.group({
      diagnosis: '',
    });
  }

  addFinalDiagnoses(): void {
    this.finalDiagnoses = this.medHistoryForm.get("finalDiagnoses") as FormArray;
    this.finalDiagnoses.push(this.createFinalDiagnoses());
  }

  addDiagnoses(): void {
    this.diagnoses = this.medHistoryForm.get("diagnoses") as FormArray;
    this.diagnoses.push(this.createDiagnoses());
  }

}
