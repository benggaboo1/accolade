import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-additional-factors',
  templateUrl: './additional-factors.component.html',
  styleUrls: ['./additional-factors.component.scss']
})
export class AdditionalFactorsComponent implements OnInit {

  toggleSection: boolean = true;
  addFactorsForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.addFactorsForm = this._formBuilder.group({
      noneRight: '', noneLeft: '',
      lessMovementRight: '', lessMovementLeft: '',
      moreMovementRight: '', moreMovementLeft: '',
      weakenedMovementRight: '', weakenedMovementLeft: '',
      swellingRight: '', swellingLeft: '',
      deformityRight: '', deformityLeft: '',
      atrophyOfDisuseRight: '', atrophyOfDisuseLeft: '',
      instabilityOfStationRight: '', instabilityOfStationLeft: '',
      locomotionDisturbanceRight: '', locomotionDisturbanceLeft: '',
      description1: '', description2: '', description3: '', description4: '',
      description5: '', description6: '', description7: '', description8: '',
      description9: '', description10: '',
      other: '', otherRight: '', otherLeft: ''
    });
  };

  hideShowSection() {
    this.toggleSection = !this.toggleSection;
  }

}
