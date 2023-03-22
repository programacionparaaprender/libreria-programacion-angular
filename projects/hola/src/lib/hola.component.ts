import { Component } from '@angular/core';
import { HolaService } from './hola.service';

@Component({
  selector: 'hl-hola',
  template: `
    <p>
      hola works - Programación para Aprender!
    </p>
  `,
  styles: [
  ]
})
export class HolaComponent {
  constructor(private readonly h: HolaService){}
}
