import {createAction, props} from '@ngrx/store';
import {ModelSchemaMetadata} from "../model-schema-metadata";

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

export const addItemToMetadata = createAction(
  '[Item List] Add Item',
  props<{ modelItem: ModelSchemaMetadata }>()
);

export const removeItemFromMetadata = createAction(
  '[Item Collection] Remove Item',
  props<{ module_name: string }>()
);

export const getAllItemsFromMetadata = createAction(
  '[Item List/API] Retrieve Items Success',
  props<{ items: ReadonlyArray<ModelSchemaMetadata> }>()
);

export const getItemFromMetadataByModuleName = createAction(
  '[Item List/API] Retrieve Item Success',
  props<{ module_name: string }>()
);

export const updateQtyOfItemFromCart = createAction(
  '[Item List/API] Retrieve Items Success',
  props<{ module_name: string,modelItem:ModelSchemaMetadata }>()
);

