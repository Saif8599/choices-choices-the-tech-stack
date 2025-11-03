import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextBlock } from './components/text-block/text-block';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TextBlock],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');
}
