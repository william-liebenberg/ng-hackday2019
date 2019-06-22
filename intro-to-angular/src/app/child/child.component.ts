import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() name: string;
  @Output() nameChanged = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  nameHasChanged(event: Event) {
    this.nameChanged.emit((event.target as HTMLInputElement).value);
  }
}
