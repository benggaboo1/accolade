import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-joint-stability',
  templateUrl: './joint-stability.component.html',
  styleUrls: ['./joint-stability.component.scss']
})
export class JointStabilityComponent implements OnInit {

  toggleSection: boolean = true;
  jointStabilityForm: FormGroup;

  constructor( private _formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.jointStabilityForm = this._formBuilder.group({
      posteriorRight: '', posteriorLeft: '', posteriorRemarks: '', 
      anteriorRight: '', anteriorLeft: '', anteriorRemarks: '', 
      medialRight: '', medialLeft: '', medialRemarks: '', 
      lateralRight: '', lateralLeft: '', lateralRemarks: '', 
    });
  };

  hideShowSection(){
    this.toggleSection = !this.toggleSection;
  }


}
