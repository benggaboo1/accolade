import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-additional-questions',
  templateUrl: './additional-questions.component.html',
  styleUrls: ['./additional-questions.component.scss']
})
export class AdditionalQuestionsComponent implements OnInit {

  toggleSection: boolean = true;
  addQuestionsForm: FormGroup;
  serviceConnectedDiagnoses: FormArray;
  addtlDiagnoses: FormArray;;

  constructor( private _formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.addQuestionsForm = this._formBuilder.group({
      serviceConnectedDiagnoses: this._formBuilder.array([ this.createServiceConnectedDiagnoses() ]),
      addtlDiagnoses: this._formBuilder.array([ this.createAddtlDiagnoses() ]),
      establishedDiagnosis: '',
      diagnosis: '',
      establishedDiagnosisSelect: ''
    });
  };

  hideShowSection(){
    this.toggleSection = !this.toggleSection;
  }

  createServiceConnectedDiagnoses(): FormGroup {
    return this._formBuilder.group({
      serviceConnectedDiagnosis: '',
    });
  }

  createAddtlDiagnoses(): FormGroup {
    return this._formBuilder.group({
      addtlDiagnosis: '',
      addtlDiagnosisSelection:'',
      addtlDiagnosisRationale: '',
    });
  }

  addServiceConnectedDiagnoses(): void {
    this.serviceConnectedDiagnoses = this.addQuestionsForm.get("serviceConnectedDiagnoses") as FormArray;
    this.serviceConnectedDiagnoses.push(this.createServiceConnectedDiagnoses());
  }

  addAddtlDiagnoses(): void {
    this.addtlDiagnoses = this.addQuestionsForm.get("addtlDiagnoses") as FormArray;
    this.addtlDiagnoses.push(this.createAddtlDiagnoses());
  }

}
