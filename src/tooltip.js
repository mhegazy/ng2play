import {DirectiveAnnotation as Directive} from 'angular2/angular2';

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
  show() {
    console.log(this.text);
  }
}