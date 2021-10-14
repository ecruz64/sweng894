import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-watering',
  templateUrl: './watering.component.html',
  styleUrls: ['./watering.component.css']
})
export class WateringComponent implements OnInit {
  myWaterForm = new FormGroup({
    test1FormControl: new FormControl(' '),
    test2FormControl: new FormControl('  '),
    test3FormControl: new FormControl(' '),
  })

  constructor() { }

  ngOnInit(): void {  }

  onSubmit() {
    console.warn(this.myWaterForm);
  }

}
