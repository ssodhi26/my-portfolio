import { Component,ViewEncapsulation } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { ContactComponent } from '../contact/contact.component';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent {

  constructor(
    private _bottomSheet: MatBottomSheet
  ){}

  openBottomSheet(): void {
    this._bottomSheet.open(ContactComponent);
  }

}
