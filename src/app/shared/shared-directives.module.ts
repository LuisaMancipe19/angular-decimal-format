import { NgModule } from '@angular/core';
import { DecimalFormatDirective } from '../directives/decimal-format.directive';
import { DecimalFormatNegativeDirective } from '../directives/decimal-format-negative.directive';

@NgModule({
  imports: [
    DecimalFormatDirective,
    DecimalFormatNegativeDirective
  ],
  exports: [
    DecimalFormatDirective,
    DecimalFormatNegativeDirective
  ],
})
export class SharedDirectivesModule {}