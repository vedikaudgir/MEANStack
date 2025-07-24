import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostCreateComponent } from "./posts/post-create.components";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostCreateComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('firstProject');
}
