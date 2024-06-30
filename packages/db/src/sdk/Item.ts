import Items, {
  ItemsTable,
  ItemsTableColumns,
  allItemsTableColumns,
} from "../schemas/items";

import { Service, ServiceArgs } from "../types";

export interface CreateItemInput {
  id?: number;
  name: string;
  color?: string;
}

const columns = ItemsTableColumns;

export class ItemService extends Service {
  constructor(service: ServiceArgs) {
    super(service);
  }

  getItems = async (): Promise<ItemsTable[]> => {
    const items = await this.knex<ItemsTable>(Items.tableName)
      .column(...allItemsTableColumns)
      .select();
    return items;
  };

  getItem = async (
    id: ItemsTable[ItemsTableColumns.ID]
  ): Promise<ItemsTable | undefined> => {
    const items = await this.knex<ItemsTable>(Items.tableName)
      .column(...allItemsTableColumns)
      .select()
      .where({ [columns.ID]: id });
    return items[0];
  };

  createItem = async (input: CreateItemInput): Promise<ItemsTable> => {
    const ItemArray = await this.knex<ItemsTable>(Items.tableName).insert(
      {
        [columns.ID]: input.id ?? null,
        [columns.NAME]: input.name,
        [columns.COLOR]: input.color ?? null,
      },
      allItemsTableColumns
    );
    return ItemArray[0];
  };
}
