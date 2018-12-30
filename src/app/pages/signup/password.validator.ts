import { AbstractControl } from '@angular/forms';

export function ValidatePasswordConfirm(password) {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    console.log(password, control.value);
    if (control.value !== password) {
      return { passwordConfirm: true };
    }

    return null;
  };
}
