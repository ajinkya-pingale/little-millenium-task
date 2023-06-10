import {Component, Input, OnInit, SimpleChanges, OnChanges, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {JsonFormControls, JsonFormData} from "./FormInterface";
import {FormValidationService} from "../../../service/form-validation.service";


@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.css']
})
export class JsonFormComponent implements OnChanges {

  @Input() jsonFormData:any;
  @Input() type;
  @Output() onChangeEvent: EventEmitter<any> = new EventEmitter();
  @Output() onSubmitEvent: EventEmitter<any> = new EventEmitter();
  @Output() buttonClick: EventEmitter<any> = new EventEmitter();
  @Output() addNew: EventEmitter<any> = new EventEmitter();
  addNewValue: boolean = false;
  public myForm: FormGroup = this.fb.group({});
  isSubmitted=false;
  autoResize = false;
  timeout:NodeJS.Timeout|number;
  outputJson:any={};
  constructor(private fb: FormBuilder,public formValidationService:FormValidationService) { }



  ngOnChanges(changes: SimpleChanges) {
    this.jsonFormData=changes.jsonFormData.currentValue;
      this.createForm(changes.jsonFormData.currentValue?.controls);
  }

  createForm(controls: any) {

    let customValidatorType = ['file']
    for (const control of controls) {
      const validatorsToAdd = [];
      if(customValidatorType.indexOf(control.type)==-1){
        for (const [key, value] of Object.entries(control.validators)) {
          switch (key) {
            case 'min':
                if (typeof value === "number") {
                  validatorsToAdd.push(Validators.min(value));
                }
              break;
            case 'max':
              if (typeof value === "number") {
                validatorsToAdd.push(Validators.max(value));
              }
              break;
            case 'required':
              if (value) {
                validatorsToAdd.push(Validators.required);
              }
              break;
            case 'requiredTrue':
              if (value) {
                validatorsToAdd.push(Validators.requiredTrue);
              }
              break;
            case 'email':
              if (value) {
                validatorsToAdd.push(Validators.email);
                validatorsToAdd.push(Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"));
              }
              break;
            case 'minLength':
              if (typeof value === "number") {
                validatorsToAdd.push(Validators.minLength(value));
              }
              break;
            case 'maxLength':
              console.log("dsa",value)
              if (typeof value === "number") {
                validatorsToAdd.push(Validators.maxLength(value));
              }
              break;
            case 'pattern':
              if (typeof value === "string") {
                validatorsToAdd.push(Validators.pattern(value));
              }
              break;

            case 'nullValidator':
              if (value) {
                validatorsToAdd.push(Validators.nullValidator);
              }
              break;
            default:
              break;
          }
        }
      }
      this.myForm.addControl(
        control.name,
        this.fb.control(control.value, validatorsToAdd)
      );
    }
    console.log(this.myForm)
  }

  onSubmit(data){
    console.log(data);
    this.isSubmitted=true;
    if(this.myForm.valid){
      this.onSubmitEvent.emit({...this.myForm.value,...this.outputJson,'submitType': data})
    }
    if(data == 'new'){
      this.addNew.emit(true)
    }
  }

  getErrorMessage(error:any,type=''){

    let errorArray: any=[];
    if(error){
      for (const [key, value] of Object.entries(error)) {
        // console.log(key,value)
        switch (key) {
          case 'min':
            // @ts-ignore
            errorArray.push(`Min value should be ${value?.min}`)
            break
          case 'max':
            // @ts-ignore
            errorArray.push(`Max value should be ${value?.max}`)
            break
          case 'minlength':
            // @ts-ignore
            errorArray.push(`Min length of string should be ${value?.requiredLength}`)
            break
          case 'maxlength':
            // @ts-ignore
            errorArray.push(`Max length of string should be ${value?.requiredLength}`)
            break
          case 'required':
            if(type=='checkbox' || type=='radio'){
              errorArray.push(`Please select option`)
            }else{
              errorArray.push(`Please enter correct value`)
            }

            break
          case 'email':
            errorArray.push(`Please enter valid email address`)
            break
          case 'pattern':
            // @ts-ignore
            if(value?.requiredPattern=="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"){
              if(errorArray.indexOf('Please enter valid email address')<=-1){
                errorArray.push(`Please enter valid email address`)
              }

            }else{
              // @ts-ignore
              errorArray.push(`Max length of string should be ${value?.requiredLength}`)
            }

            break
        }
      }
    }

    return errorArray;
  }

  checkRequiredFiled(controlName:string){
    const control= this.myForm.get(controlName)
    // @ts-ignore
    const { validator } = control
    if (validator) {
      const validation = validator(new FormControl())
      return validation !== null && validation.required === true
    }
    return false
      // .hasValidator(Validators.required) ?? false
  }

  onBase64ImageSelected(e: any, control: any) {
    let fileToLoad = e[0];
    const reader = new FileReader();
    reader.readAsDataURL(fileToLoad);
    reader.onload = () => {
      console.log(reader.result);
      control['image_preview'] = reader.result;
      // this.productDetails['image'] = reader.result;
      // this.addProduct();
    };
  }

  onChange(event:any,control:any){
    console.log(control)
    if(control.type=='file'){
      if(control.fileTypes == '.jpg, .jpeg, .png'){
        this.onBase64ImageSelected(event.target.files, control)
      }
      console.log(event)
      this.outputJson[control.name]=event.target.files
    }
    if(control.hasOwnProperty('emitChange') && control.emitChange ){
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.onChangeEvent.emit({
          control,
          event,
          values:{...this.myForm.value,...this.outputJson}
        })
      }, 500);
    }
  }

  customButton(){
    this.isSubmitted = false;
    this.addNewValue = true;
    clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.buttonClick.emit(this.addNewValue)
      }, 500);
    return true
  }

}
