import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-initial-range',
  templateUrl: './initial-range.component.html',
  styleUrls: ['./initial-range.component.scss']
})
export class InitialRangeComponent implements OnInit {

  toggleSection: boolean = true;
  initialRangeForm: FormGroup;

  constructor( private _formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.initialRangeForm = this._formBuilder.group({
      finalDiagnosis: '',
      diagnosis: ''
    });
  };

  hideShowSection(){
    this.toggleSection = !this.toggleSection;
  }

}
