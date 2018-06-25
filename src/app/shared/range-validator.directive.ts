import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms'
import { Directive } from '@angular/core'
@Directive({
    selector: '[appRangeValidator]'
})
export class rangeValidatorDirective implements Validator {
    validate(control: AbstractControl): { [key: string]:any } | null {
        return control.value >='10' ? { 'inRange': true } : null;
    }
}