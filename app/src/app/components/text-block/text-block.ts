import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-block',
  imports: [], // ← De aanwezigheid van 'imports' maakt het standalone
  templateUrl: './text-block.html',
  styleUrl: './text-block.css',
})
export class TextBlock {
  @Input() text: string = 'Standaard tekst';
}
