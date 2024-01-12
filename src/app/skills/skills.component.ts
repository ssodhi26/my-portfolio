import { Component } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {

  //panelOpenState =false;

  skills = [
    {name:'image.jpeg', caption: 'mr cool'},
    {name:'image1.jpeg', caption: 'sleep'},
    {name:'image2.jpeg', caption: 'awesome'}
  ]

}
