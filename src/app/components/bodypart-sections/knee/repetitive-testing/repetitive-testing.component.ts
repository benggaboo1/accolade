import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-repetitive-testing',
  templateUrl: './repetitive-testing.component.html',
  styleUrls: ['./repetitive-testing.component.scss']
})
export class RepetitiveTestingComponent implements OnInit {

  toggleSection: boolean = true;
  repTestingForm: FormGroup;

  constructor( private _formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.repTestingForm = this._formBuilder.group({
      finalDiagnosis: '',
      diagnosis: ''
    });
  };

  hideShowSection(){
    this.toggleSection = !this.toggleSection;
  }


}
