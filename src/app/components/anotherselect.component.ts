import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-another-select',
  template: `
    <div class="list-item">
      <input type="text" [value]="anotherOption" readonly="true" />
    </div>
  `,
})
export class AnotherSelectComponent implements OnInit {
  @Input() anotherOption: any;

  constructor() {}

  ngOnInit() {}
}