import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'floodCodeDescription'})
export class FloodCodeDescriptionPipe implements PipeTransform {

  private codeDescriptions = {
    N: 'None', L: 'Low', M: 'Med', H: 'High'
  };

  transform(code: string): string {
    return this.codeDescriptions[code || 'N'];
  }
}

@Pipe({name: 'floodCodeImg'})
export class FloodCodeImgPipe implements PipeTransform {

  private codeDescriptions = {
    N: 'img/blue_dot.png', L: 'img/green_dot.png', M: 'img/yellow_dot.png', H: 'img/red_dot.png'
  };

  transform(code: string): string {
    return this.codeDescriptions[code || 'N'];
  }
}
