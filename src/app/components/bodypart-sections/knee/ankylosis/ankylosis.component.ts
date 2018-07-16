import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-ankylosis',
  templateUrl: './ankylosis.component.html',
  styleUrls: ['./ankylosis.component.scss']
})
export class AnkylosisComponent implements OnInit {

  toggleSection: boolean = true;
  ankylosisForm: FormGroup;

  constructor( private _formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.ankylosisForm = this._formBuilder.group({
      right1: '', left1: '', remarks1: '',
      right2: '', left2: '', remarks2: '',
      right3: '', left3: '', remarks3: '',
      right4: '', left4: '', remarks4: '',
    });
  };

  hideShowSection(){
    this.toggleSection = !this.toggleSection;
  }

}
