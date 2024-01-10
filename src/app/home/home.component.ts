import { Component, ViewEncapsulation } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _bottomSheet: MatBottomSheet
  ){
    this.router.navigate(['intro']);
  }

  openBottomSheet(): void {
    this._bottomSheet.open(ContactComponent);
  }

}
