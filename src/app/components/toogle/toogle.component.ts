import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toogle',
  templateUrl: './toogle.component.html',
  styleUrls: ['./toogle.component.scss']
})
export class ToogleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeTheme() {
    console.log('click!');
  }

}
