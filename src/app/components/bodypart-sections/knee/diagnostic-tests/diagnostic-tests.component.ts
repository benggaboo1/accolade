import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-diagnostic-tests',
  templateUrl: './diagnostic-tests.component.html',
  styleUrls: ['./diagnostic-tests.component.scss']
})
export class DiagnosticTestsComponent implements OnInit {

  toggleSection: boolean = true;
  diagnosticTestsForm: FormGroup;
  diagnosticTests: FormArray;

  constructor( private _formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.diagnosticTestsForm = this._formBuilder.group({
      xrayDate: '', xrayLaterality: '', 
      xrayFindings: '', xrayPage: '', 
      mriDate: '', mriLaterality: '', 
      mriFindings: '', mriPage: '', 
      ctScanDate: '', ctScanLaterality: '', 
      ctScanFindings: '', ctScanPage: '', 
      other1Name: '',
      other1Date: '', other1Laterality: '', 
      other1Findings: '', other1Page: '', 
      diagnosticTests: this._formBuilder.array([ this.createItem() ])
    });
  };

  createItem(): FormGroup {
    return this._formBuilder.group({
      otherTestType: '',
      otherDate: '',
      otherLaterality: '',
      otherFindings: '',
      otherPage: '',
    });
  }

  addItem(): void {
    this.diagnosticTests = this.diagnosticTestsForm.get("diagnosticTests") as FormArray;
    this.diagnosticTests.push(this.createItem());
  }

  hideShowSection(){
    this.toggleSection = !this.toggleSection;
  }

}
