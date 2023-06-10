import { createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  addItemToMetadata,
  removeItemFromMetadata,
  getAllItemsFromMetadata, updateQtyOfItemFromCart, getItemFromMetadataByModuleName
} from './counter.actions';
import {ModelSchemaMetadata} from "../model-schema-metadata";

export const initialState = 0;
export const initialStateCart:ModelSchemaMetadata[]=[];

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export const cartReducer = createReducer(
  initialStateCart,
  on(addItemToMetadata, (state, {modelItem}) => {
    if(state.filter((element)=>element.module_name==modelItem.module_name).length>0){
      return [...state]
    }
    return [...state,modelItem];
  }),
on(getItemFromMetadataByModuleName, (state, {module_name}) => {
    return state.filter((element)=>element.module_name==module_name)
}),
  on(removeItemFromMetadata, (state, {module_name}) => {
    let tempList:ModelSchemaMetadata[] = []
    state.forEach((element,index)=>{
      if(element.module_name!=module_name){
        state.push(element)
        tempList.push(element)
      }
    })
    console.log('state : ',state)
    return tempList;
  }),
  on(updateQtyOfItemFromCart, (state, {module_name,modelItem}) => {
    let tempModelItem:ModelSchemaMetadata|undefined;
    let index=-1;
    state.forEach((element,i)=>{
      if(element.module_name==module_name){
        tempModelItem = element;
        index = i;
      }
    })
    if(tempModelItem?.module_name && index!=-1){
      if(state[index].module_name){
        // state[index].m+=qty;
      }
    }
    return state;
  }),

);
