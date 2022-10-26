import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-main-lib',
  template: `
    <p>
      main-lib works!
    </p>
  `,
  styles: [
  ]
})
export class MainLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
