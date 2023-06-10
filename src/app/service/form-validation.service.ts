import { Injectable } from '@angular/core';
import {NgControl} from "@angular/forms";
import {isMessageAwareValidationError} from "../shared/components/json-form/form-validation-wrapper";

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  handleValidationErrors(ngControl: NgControl) {
    if (ngControl) {
      const errors = ngControl.errors;
      if (errors) {
        return Object.keys(errors).map(errorKey => {
          const error = errors[errorKey];
          // console.log('insidee rror', error, ngControl.touched, ngControl.dirty, isMessageAwareValidationError(error))

          if (isMessageAwareValidationError(error) && (ngControl.touched || ngControl.dirty)) {
            return error;
          } else if (ngControl.touched || ngControl.dirty) {
            return {
              original: error,
              messageCode: `app.form.validation.default.${errorKey}`
            };
          } else {
            return {
              original: '',
              messageCode: ''
            };
          }
        });
      } else return [];
    } else return [];
  }

}
