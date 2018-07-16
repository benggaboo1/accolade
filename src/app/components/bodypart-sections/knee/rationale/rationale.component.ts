import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-rationale',
  templateUrl: './rationale.component.html',
  styleUrls: ['./rationale.component.scss']
})
export class RationaleComponent implements OnInit {

  toggleSection: boolean = true;
  rationaleForm: FormGroup;

  constructor( private _formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.rationaleForm = this._formBuilder.group({
      rationale: '',
    });
  };

  hideShowSection(){
    this.toggleSection = !this.toggleSection;
  }


}
