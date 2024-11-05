import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-page',
  templateUrl: './demo-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: []
})
export class DemoPageComponent { }
