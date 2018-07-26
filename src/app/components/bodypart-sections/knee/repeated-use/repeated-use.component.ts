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
      isFunctionalLossPresent: false,
      isROMLossMinimal: false,
      isPainIncrease: false, 
      isPainWeakneesInstability: false,
      painWeakneesInstabilityAbility: new FormControl({ value: '', disabled: true }),
      isDependOnTypeOfMovement: '', dependOnTypeOfMovementExmpl: new FormControl({ value: '', disabled: true }),
      isDependOnLevelOfActivity: '', dependOnLevelOfActivityExmpl: new FormControl({ value: '', disabled: true }),
      isUnableToDoSelfCare: '', selfCareActivities: new FormControl({ value: '', disabled: true }),
      isNotFeasible: '', experiencesIncreased: new FormControl({ value: '', disabled: true }),
      isUnableToSay: '', unableToSayExpl: new FormControl({ value: '', disabled: true }),
    });
  };

  hideShowSection(){
    this.toggleSection = !this.toggleSection;
  }

  showRangeOfMotionDescription(){
    let rightROM = this.repeatedUseForm.get('describeRangeInMotionRight').value;
    let leftROM = this.repeatedUseForm.get('describeRangeInMotionLeft').value;

    if(rightROM == 'no' || leftROM == 'no'){
      return true;
    }
  }

  disableToggle(checkbox:string, textarea: string){
    if(this.repeatedUseForm.get(checkbox).value == true){
      this.repeatedUseForm.controls[textarea].enable();
    }else{
      this.repeatedUseForm.controls[textarea].disable();
      this.repeatedUseForm.controls[textarea].setValue("");
    }
  }
}
