import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-functional-impact',
  templateUrl: './functional-impact.component.html',
  styleUrls: ['./functional-impact.component.scss']
})
export class FunctionalImpactComponent implements OnInit {

  toggleSection: boolean = true;
  funcImpactForm: FormGroup;

  constructor( private _formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.funcImpactForm = this._formBuilder.group({
      noneRight: '', noneLeft: '', noneRemarks: '',
      repMovementRight: '', repMovementLeft: '', repMovementRemarks: '',
      crossLegsRight: '', crossLegsLeft: '', crossLegsRemarks: '',
      weightBearingRight: '', weightBearingLeft: '', weightBearingRemarks: '',
      prolStandRight: '', prolStandLeft: '', prolStandRemarks: '',
      prolSitRight: '', prolSitLeft: '', prolSitRemarks: '',
      other1Name: '', other1Right: '', other1Left: '', other1Remarks: '',
    });
  };

  hideShowSection(){
    this.toggleSection = !this.toggleSection;
  }

}
