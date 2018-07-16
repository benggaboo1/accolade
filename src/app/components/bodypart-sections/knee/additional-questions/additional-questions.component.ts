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

  constructor( private _formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.addQuestionsForm = this._formBuilder.group({
      establishedDiagnosis: '',
      diagnosis: '',
      establishedDiagnosisSelect: ''
    });
  };

  hideShowSection(){
    this.toggleSection = !this.toggleSection;
  }


}
