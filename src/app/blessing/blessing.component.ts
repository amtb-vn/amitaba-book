import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blessing',
  templateUrl: './blessing.component.html',
  styleUrls: ['./blessing.component.scss']
})
export class BlessingComponent implements OnInit {
  blessingOption: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  chooseBlessingOption() {
    if (this.blessingOption == 'type') {
      this.blessingOption = 'voice';
    } else {
      this.blessingOption = "type";
    }
  }
}
