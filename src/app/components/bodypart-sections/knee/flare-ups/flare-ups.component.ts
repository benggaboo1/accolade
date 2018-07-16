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
    });
  };

  hideShowSection(){
    this.toggleSection = !this.toggleSection;
  }


}
