import { Component } from '@angular/core';
import { TextBlock } from '../../components/text-block/text-block';
import { ThreeModal1 } from '../../components/three-modal-1/three-modal-1';

@Component({
  selector: 'app-home',
  imports: [TextBlock, ThreeModal1],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
