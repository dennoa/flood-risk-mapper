import { Pipe, PipeTransform } from '@angular/core';

export class FloodCode {
  public static all = ['N', 'L', 'M', 'H'];
}

@Pipe({name: 'floodCodeDescription'})
export class FloodCodeDescriptionPipe implements PipeTransform {

  private codeDescriptions = {
    N: 'None', L: 'Low', M: 'Medium', H: 'High'
  };

  transform(code: string): string {
    return this.codeDescriptions[code];
  }
}

@Pipe({name: 'floodCodeImg'})
export class FloodCodeImgPipe implements PipeTransform {

  private codeDescriptions = {
    N: 'img/blue_dot.png', L: 'img/green_dot.png', M: 'img/yellow_dot.png', H: 'img/red_dot.png'
  };

  transform(code: string): string {
    return this.codeDescriptions[code] || 'img/question_mark.png';
  }
}

@Pipe({name: 'floodCodeMarker'})
export class FloodCodeMarkerPipe implements PipeTransform {

  private codeDescriptions = {
    N: 'img/blue_marker.gif', L: 'img/green_marker.gif', M: 'img/yellow_marker.gif', H: 'img/red_marker.gif'
  };

  transform(code: string): string {
    return this.codeDescriptions[code] || 'img/question_marker.gif';
  }
}
