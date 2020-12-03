import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# of Users' },
    { value: 902, label: 'Revenue' },
    { value: 14, label: 'Reviews' }
  ];

  sofaItemList = [
    { image: 'assets/images/sectional_sofa.jpg', title: 'Excepteur sint', description: 'Sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { image: 'assets/images/orange_sofa.jpg', title: 'Occaecat cupidatat', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { image: 'assets/images/two_seat_sofa.jpg', title: 'Mollit anim id est laborum', description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
