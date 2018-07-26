import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-remaining-effective-function',
  templateUrl: './remaining-effective-function.component.html',
  styleUrls: ['./remaining-effective-function.component.scss']
})
export class RemainingEffectiveFunctionComponent implements OnInit {

  toggleSection: boolean = true;
  remainingEffFuncForm: FormGroup;

  constructor( private _formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.remainingEffFuncForm = this._formBuilder.group({
      remainingExtSelect: '',
      extremitiesSelect: '',
      briefSummary: '',
    });
  };

  hideShowSection(){
    this.toggleSection = !this.toggleSection;
  }

  onRemainingExtChange(val){
    if(val == "yes"){
      this.remainingEffFuncForm.controls['extremitiesSelect'].enable();
    }else{
      this.remainingEffFuncForm.controls['extremitiesSelect'].disable();
      this.remainingEffFuncForm.controls['extremitiesSelect'].setValue("");
    }
  }


}
