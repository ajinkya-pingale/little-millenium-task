interface JsonFormValidators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: boolean;
  maxLength?: boolean;
  pattern?: string;
  nullValidator?: boolean;
}
interface JsonFormControlOptions {
  min?: string;
  max?: string;
  step?: string;
  icon?: string;
}
export interface JsonFormControls {
  name: string;
  label: string;
  value: any;
  type: string;
  options?: JsonFormControlOptions|undefined;
  required: boolean;
  validators: JsonFormValidators;
  customValidators:any,
}
export interface JsonFormData {
  controls: JsonFormControls[];
}

export type temp ={
  max:'text'|'number'
}
