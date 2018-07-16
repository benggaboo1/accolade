import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-ankle',
  templateUrl: './ankle.component.html',
  styleUrls: ['./ankle.component.scss']
})
export class AnkleComponent implements OnInit {

  ankleForm: FormGroup;
  constructor( private _formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.ankleForm = this._formBuilder.group({
      test: '',
      TEST2: '',
      TEST3: '',
      TEST4: '',
      TEST5: '',
      TEST6: '',
      TEST7: '',
      TEST8: '',
      TEST9: '',
      TEST10: '',
    });
  }
    ;

}
