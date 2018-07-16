import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-surgical-procedure',
  templateUrl: './surgical-procedure.component.html',
  styleUrls: ['./surgical-procedure.component.scss']
})
export class SurgicalProcedureComponent implements OnInit {

  toggleSection: boolean = true;
  surgicalProcedureForm: FormGroup;
  surgeries: FormArray;

  constructor( private _formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.surgicalProcedureForm = this._formBuilder.group({
      surgery1Date: '', surgery1Type: '',
      surgery1Laterality: '', surgery1Page: '',
      surgery2Date: '', surgery2Type: '',
      surgery2Laterality: '', surgery2Page: '',
      surgeries: this._formBuilder.array([ this.createItem() ])
    });
  };

  createItem(): FormGroup {
    return this._formBuilder.group({
      surgeryDate: '',
      surgeryType: '',
      surgeryLaterality: '',
      surgeryPage: '',
    });
  }

  addItem(): void {
    this.surgeries = this.surgicalProcedureForm.get("surgeries") as FormArray;
    this.surgeries.push(this.createItem());
  }

  hideShowSection(){
    this.toggleSection = !this.toggleSection;
  }

}
