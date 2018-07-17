import { Component, OnInit } from '@angular/core';
import { BodyPart} from '../../../models/bodypart';
import { bodyparts } from '../../../models/bodyparts';


import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
    
  accForm: FormGroup;
  bodyparts = bodyparts;
  isShowSection: boolean = true;


  constructor( private _formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
    this.accForm.value.select1 = '';
  }

  createForm(){
    this.accForm = this._formBuilder.group({
      headAche: false,
      ankle: false,
      upperBack: false,
      lowerBack: false,
      ear: false,
      heart: false,
      hipThigh: false,
      shoulderArm: false,
      firstName: '',
      lastName: '',
      email: '',
      apartmentLoc:'',
      appointmentDate: '',
      appointmentTime: '',
      serviceBranch:'',
      serviceStart:'',
      serviceEnd: '',
      medications: '',
      alcohol: '',
      tobacco: '',
      alcTobOthers: '',
      // test1: false,
      // test2: false,
      // test3: '',
      // textbox1: '',
      // textbox2: '',
      // textbox3: '',
      // input1: '',
      // input2: '',
      // input3: '',
      // select1: 'selectOption'
    });
  };


  onTest1Change(value){
    this.accForm.controls['select1'].reset();
    this.accForm.controls['input1'].reset();
    this.accForm.controls['input2'].reset();
    this.accForm.controls['input3'].reset();
    if(value == true){
      this.accForm.controls['input1'].disable();
      this.accForm.controls['input2'].disable();
      this.accForm.controls['input3'].disable();
    }else{
      this.accForm.controls['input1'].enable();
      this.accForm.controls['input2'].enable();
      this.accForm.controls['input3'].enable();
    }
  }

  onSelect1Change(value){
    this.accForm.controls['input1'].reset();
    this.accForm.controls['input2'].reset();
    this.accForm.controls['input3'].reset();
    if(value == 'option1'){
      this.accForm.controls['input1'].disable();
      this.accForm.controls['input2'].disable();
      this.accForm.controls['input3'].disable();
    }else if(value == 'option2'){
      this.accForm.controls['input1'].disable();
      this.accForm.controls['input2'].enable();
      this.accForm.controls['input3'].disable();
    }else if(value == 'option3'){
      this.accForm.controls['input1'].enable();
      this.accForm.controls['input2'].disable();
      this.accForm.controls['input3'].disable();
    }else  if(value == 'option4'){
      this.accForm.controls['input1'].enable();
      this.accForm.controls['input2'].disable();
      this.accForm.controls['input3'].enable();
    }else {
      this.accForm.controls['input1'].enable();
      this.accForm.controls['input2'].enable();
      this.accForm.controls['input3'].enable();
    }

  }

  hideShowSection(){
    this.isShowSection = !this.isShowSection;
  }

}
