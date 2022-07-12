import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectBoxComponent implements OnInit {
  @Input() title = "";
  @Input() type = "";

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
