import { Component, ViewEncapsulation } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';


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
    
  ){
    this.router.navigate(['intro']);
  }

  

}
