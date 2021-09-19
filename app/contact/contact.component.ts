import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  panelOpenState = false;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 4000,
    });
  }
}


@Component({
  selector: 'contact.component.msg',
  templateUrl: 'contact.component.msg.html',
  styles: [`
    .example-pizza-party {
      color: light-green;
    }
  `],
})
export class PizzaPartyComponent {}
