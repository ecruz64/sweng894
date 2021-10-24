import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-h-lawn',
  templateUrl: './h-lawn.component.html',
  styleUrls: ['./h-lawn.component.css']
})
export class HLawnComponent implements OnInit {
  myHlawnForm = new FormGroup({
    test1hLawnFC: new FormControl(' '),
    test2hLawnFC: new FormControl(' '),
    test3hLawnFC: new FormControl(' '),
  });
  constructor() { }
  ngOnInit(): void { }
  onSubmit() {
    console.warn(this.myHlawnForm);
  }

}
