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
    let mainLogo = document.getElementById('headerLogo');
    let compareRef = checkColor.toUpperCase().includes('#FFF');

    document.documentElement.style.setProperty('--appBackgroundColor', compareRef ? '#333333' : '#FFFFFF');
    document.documentElement.style.setProperty('--headerBorderColor', compareRef ? '#000000' : '#E5E5E5');
    document.documentElement.style.setProperty('--titleFontColor', compareRef ? '#FFFFFF' : '#333333');
    document.documentElement.style.setProperty('--subtitleFontColor', compareRef ? '#E5E5E5' : '#999999');
    document.documentElement.style.setProperty('--toogleFontColor', compareRef ? '#333333' : '#999999');
    mainLogo!.setAttribute( 'src', compareRef ? 'assets/images/LOGO-black.png' : 'assets/images/LOGO.png');
    this.toogleMessage =  compareRef ? 'Switch to light mode!' : 'Switch to dark mode!';
  }

}
