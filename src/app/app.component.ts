import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prototype';
  todo = [
    'Project Proposal',
    'Prototype',
    'Requirements Gathering',
    'Risk Managment'
  ];

  inprogress = [
    'Front End GUI'
  ];

  done = [
    'Prototype Demo',
    'Complete SignalR Development',
    'Test Web Service',
    'Clean Up Code'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
