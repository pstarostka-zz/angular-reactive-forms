import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';

@Pipe({
  name: 'formArray',
  pure: true
})
export class FormArrayPipe implements PipeTransform {
  transform(value: AbstractControl): FormArray {
    return value as FormArray;
  }
}
