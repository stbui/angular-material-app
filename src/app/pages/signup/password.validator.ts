import { AbstractControl } from '@angular/forms';

/**
 * 校验二次密码是否相同
 * @param password 密码
 */
export function ValidatePasswordConfirm(password) {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value !== password) {
      return { passwordConfirm: true };
    }

    return null;
  };
}
