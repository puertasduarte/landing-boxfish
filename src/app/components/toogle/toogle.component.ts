import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toogle',
  templateUrl: './toogle.component.html',
  styleUrls: ['./toogle.component.scss']
})
export class ToogleComponent implements OnInit {
  
  toogleMessage = 'Switch to dark mode!';

  constructor() { }


  ngOnInit(): void {
  }

  changeTheme(): void {
    let checkColor= getComputedStyle(document.documentElement).getPropertyValue('--appBackgroundColor');

    if (checkColor.includes('#FFFFFF')) {
      document.documentElement.style.setProperty('--appBackgroundColor', '#333333');
      document.documentElement.style.setProperty('--headerBorderColor', '#000000');
      document.documentElement.style.setProperty('--titleFontColor', '#FFFFFF');
      document.documentElement.style.setProperty('--subtitleFontColor', '#E5E5E5');
      document.documentElement.style.setProperty('--toogleFontColor', '#333333');
      this.toogleMessage = 'Switch to light mode!';
    } else {
      document.documentElement.style.setProperty('--appBackgroundColor', '#FFFFFF');
      document.documentElement.style.setProperty('--headerBorderColor', '#E5E5E5');
      document.documentElement.style.setProperty('--titleFontColor', '#333333');
      document.documentElement.style.setProperty('--subtitleFontColor', '#999999');
      document.documentElement.style.setProperty('--toogleFontColor', '#999999');
      this.toogleMessage = 'Switch to dark mode!';
    }
  }

}
