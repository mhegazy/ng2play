import {Directive} from 'angular2/angular2';

@Directive({
  selector: '[tooltip]',
  properties: [
    'text: tooltip'
  ],
  hostListeners: {
    mouseover: 'show()'
  }
})
export class Tooltip {
  text: string;
  show() {
    console.log(this.text);
  }
}