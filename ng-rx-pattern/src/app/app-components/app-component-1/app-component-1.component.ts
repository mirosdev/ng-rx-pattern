import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-app-component-1',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'app-component-1.component.html',
  styleUrls: ['app-component-1.component.css']
})
export class AppComponent1Component {
}
