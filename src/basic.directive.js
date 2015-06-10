
import {DirectiveAnnotation as Directive} from 'angular2/angular2';

@Directive({
  selector: '[div]',
  properties: [
    'text: tooltip'
  ]
})
export class BasicDirective {
// <img [src]="myImage">
// <div [hidden]="isHidden">This div will be hidden if isHidden is true</div>	
}
