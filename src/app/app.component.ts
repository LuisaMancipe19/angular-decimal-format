import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { SharedDirectivesModule } from './shared/shared-directives.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, SharedDirectivesModule],
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formPositive = new FormGroup({
    positive: new FormControl(''),
  });

  formNegative = new FormGroup({
    negative: new FormControl(''),
  });
}