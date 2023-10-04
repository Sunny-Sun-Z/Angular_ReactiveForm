import { Component } from '@angular/core';
export type EditorType = 'name' | 'profile'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_ReactiveForm';
  
  editor: EditorType = 'name';

  toggleEditor(typeName: EditorType){
   this.editor = typeName;
  }

}
