import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-remaining-extremities',
  templateUrl: './remaining-extremities.component.html',
  styleUrls: ['./remaining-extremities.component.scss']
})
export class RemainingExtremitiesComponent implements OnInit {

  toggleSection: boolean = true;
  remainingExtForm: FormGroup;

  constructor( private _formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.remainingExtForm = this._formBuilder.group({
      remainingExtSelect: '',
      extremitiesSelect: '',
      briefSummary: '',
    });
  };

  hideShowSection(){
    this.toggleSection = !this.toggleSection;
  }


}
