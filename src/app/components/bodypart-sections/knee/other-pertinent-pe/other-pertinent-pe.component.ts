import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-other-pertinent-pe',
  templateUrl: './other-pertinent-pe.component.html',
  styleUrls: ['./other-pertinent-pe.component.scss']
})
export class OtherPertinentPeComponent implements OnInit {

  toggleSection: boolean = true;
  otherPertinentPEForm: FormGroup;

  constructor( private _formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.otherPertinentPEForm = this._formBuilder.group({
      other: '',
      otherBriefSummary: ''
    });
  };

  hideShowSection(){
    this.toggleSection = !this.toggleSection;
  }

}
