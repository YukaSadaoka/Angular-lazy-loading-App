import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod-home',
  templateUrl: './mod-home.component.html',
  styleUrls: ['./mod-home.component.css']
})
export class ModHomeComponent implements OnInit {
  modalOpen = false;
  onClickModal(){
    console.log("Clicked!");
    this.modalOpen = this.modalOpen ? false: true;
  }

  accordionItmes = [
    { title: 'sunt in culpa qui officia deserunt mollit anim id est laborum.', content: 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'},
    { title: 'sunt in culpa qui officia deserunt mollit anim id est laborum.', content: 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'},
    { title: 'sunt in culpa qui officia deserunt mollit anim id est laborum.', content:'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
