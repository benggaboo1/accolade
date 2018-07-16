import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-repeated-use',
  templateUrl: './repeated-use.component.html',
  styleUrls: ['./repeated-use.component.scss']
})
export class RepeatedUseComponent implements OnInit {

  toggleSection: boolean = true;
  repeatedUseForm: FormGroup;

  constructor( private _formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.repeatedUseForm = this._formBuilder.group({
      examinedImmediatelyRight: '', examinedImmediatelyLeft: '',
      inconsistencyExplanationRight: '', inconsistencyExplanationLeft: '',
      limitAbilityRight: '', limitAbilityLeft: '',
      unableToSayRight: '', unableToSayLeft: '',
      naRight: '', naLeft: '',
      painRight: '', painLeft: '',
      fatigueRight: '', fatigueLeft: '',
      weaknessRight: '', weaknessLeft: '',
      lackEnduranceRight: '', lackEnduranceLeft: '',
      incoordinationRight: '', incoordinationLeft: '',
      other1Right: '', other1Left: '',
      other1NameRight: '', other1NameLeft: '', 
      describeRangeInMotionRight: '', describeRangeInMotionLeft: '', 
    });
  };

  hideShowSection(){
    this.toggleSection = !this.toggleSection;
  }


}
