import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-assitive-directive',
  templateUrl: './assitive-directive.component.html',
  styleUrls: ['./assitive-directive.component.scss']
})
export class AssitiveDirectiveComponent implements OnInit {

  toggleSection: boolean = true;
  assistiveDevicesForm: FormGroup;
  items: FormArray;

  constructor( private _formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.assistiveDevicesForm = this._formBuilder.group({
      wheelChairRight: '', wheelChairLeft: '', wheelChairComment: '',
      braceRight: '', braceLeft: '', braceComment: '',
      crutchesRight: '', crutchesLeft: '', crutchesComment: '',
      caneRight: '', caneLeft: '', caneComment: '',
      walkerRight: '', walkerLeft: '', walkerComment: '',
      other1Name: '', other1Right: '', other1Left: '', other1Comment: '',
      items: this._formBuilder.array([ this.createItem() ])
    });
  };

  hideShowSection(){
    this.toggleSection = !this.toggleSection;
  }

  createItem(): FormGroup {
    return this._formBuilder.group({
      otherName: '',
      otherRight: '',
      otherLeft: '',
      otherComments: '',
    });
  }

  addItem(): void {
    this.items = this.assistiveDevicesForm.get("items") as FormArray;
    this.items.push(this.createItem());
  }

}
