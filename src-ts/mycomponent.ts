import {
  ComponentAnnotation as Component,
  ViewAnnotation as View, bootstrap, NgFor
} from 'angular2/angular2';
import { Tooltip } from 'tooltip';
import {GithubNames} from 'github.service';

@Component({
  selector: 'my-component',
  appInjector: [GithubNames],
  //lifecycle: [onChange]
  // properties: {name: 'name'},
  // events: ['rate'],
})
@View({
  templateUrl: 'mycomponent.html',
    directives: [Tooltip, NgFor]
})
export class MyComponent {
  message: string;
  foo: string;
  github: GithubNames;
  users: Array<{login: string, avatar_url: string}>; 
  constructor(github: GithubNames) {
    this.message = 'World';
    this.foo = 'bar';
    setTimeout(() => this.message = 'Angular-tips', 1000);
    this.github = github;
    // this.name;
    // this.rate;
  }
  
  fetch() {
    this.users = this.github.getUsersSync();
    // this.github.getUsers().then((users: any) => {
    //   this.users = users;
    // });
  }
  works() {
    alert('this works!');
  }
  // onChange(changes: any) {
  //   console.log('change happened');
  // }
}