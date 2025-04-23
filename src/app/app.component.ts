import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { DecimalFormatDirective } from './directives/decimal-format.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, DecimalFormatDirective],
  templateUrl: './app.component.html'
})
export class AppComponent {
  form = new FormGroup({
    numero: new FormControl(''),
  });
}