import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-awesome-select',
  template: `
    <div class="list-item">
      <input type="text" [value]="selectedOption" readonly="true" />
    </div>
  `,
})
export class AwesomeSelectComponent implements OnInit {
  @Input() selectedOption: any;

  constructor() {}

  ngOnInit() {}
}