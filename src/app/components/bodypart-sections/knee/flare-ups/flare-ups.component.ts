import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-flare-ups',
  templateUrl: './flare-ups.component.html',
  styleUrls: ['./flare-ups.component.scss']
})
export class FlareUpsComponent implements OnInit {

  toggleSection: boolean = true;
  flareUpsForm: FormGroup;

  constructor( private _formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.flareUpsForm = this._formBuilder.group({
      examinedDuringFlareUpRight: '', examinedDuringFlareUpLeft: '',
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
    let rightROM = this.flareUpsForm.get('describeRangeInMotionRight').value;
    let leftROM = this.flareUpsForm.get('describeRangeInMotionLeft').value;

    if(rightROM == 'no' || leftROM == 'no'){
      return true;
    }
  }

  disableToggle(checkbox:string, textarea: string){
    if(this.flareUpsForm.get(checkbox).value == true){
      this.flareUpsForm.controls[textarea].enable();
    }else{
      this.flareUpsForm.controls[textarea].disable();
      this.flareUpsForm.controls[textarea].setValue("");
    }
  }

}
