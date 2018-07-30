import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test-library',
  template: `
    <p>
      *******test-library works
      <b>version 0.0.1</b>******** !
    
    </p>
  `,
  styles: []
})
export class TestLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
