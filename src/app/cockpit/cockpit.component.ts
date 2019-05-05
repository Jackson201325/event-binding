import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter <{blueprintName: string, blueprintContent: string}>();
  // newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit() {
  }
 
  onAddServer(inputServerName: HTMLInputElement, inputServerContent: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: inputServerName.value, 
      serverContent: inputServerContent.value})
  }

  onAddBlueprint(inputBlueprintName: HTMLInputElement, inputBlueprintContent: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: inputBlueprintName.value, 
      blueprintContent: inputBlueprintContent.value})
  }
}
