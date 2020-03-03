import { Component, OnInit } from '@angular/core';
import { SampleLibService, SampleLibModel } from './sample-lib.service';

@Component({
  selector: 'lib-sample-lib',
  template: `
    <p>
      sample-lib works!
    </p>
  `,
  styles: []
})
export class SampleLibComponent implements OnInit {

  constructor(private _sample: SampleLibService) { }

  ngOnInit(): void {
  }

  setSize(size: SampleLibModel): void {
    console.log(size);
  }

}
