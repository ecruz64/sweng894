import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-mowing',
  templateUrl: './mowing.component.html',
  styleUrls: ['./mowing.component.css']
})
export class MowingComponent implements OnInit {
  myForm = new FormGroup({
    lawnMower: new FormControl( ''),
    minUsed: new FormControl(''),
    lawnSize: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {  }

  onSubmit() {
    console.warn(this.myForm);
  }

}
