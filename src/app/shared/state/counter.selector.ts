import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ModelSchemaMetadata} from "../model-schema-metadata";

export const selectCount = createFeatureSelector<Readonly<number>>('count');

export const selectCart = createFeatureSelector<ModelSchemaMetadata[]>('cart');

export const selectItemByModuleNameFromCart = (moduleName: string) =>
  createSelector(selectCart, (entities: ModelSchemaMetadata[]) =>

    entities.find((item: ModelSchemaMetadata) => item.module_name == moduleName)
  );

export const selectAllItemsFromCart = () =>
  createSelector(selectCart, (entities) =>
    entities
  );




