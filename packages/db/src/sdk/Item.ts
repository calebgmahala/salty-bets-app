 
  import Items, {
    ItemsTable,
  ItemsTableColumns,
  ColumnsDefault
} from "../schemas/items";



import { Service, ServiceArgs } from "../types";

export interface CreateItemInput {
  id?: number;
  name: string;
  color: string;
}

const columns = ItemsTableColumns;

export class ItemService extends Service {
  constructor(service: ServiceArgs) {
    super(service);
  }
  columnsDefault = [
    columns.ID,
    columns.NAME,
    columns.COLOR
  ];


  getItems = async (): Promise<ColumnsDefault[]> => {
    const items = await this.knex<ItemsTable>(Items.tableName)
      .column(...this.columnsDefault)
      .select();
    return items;
  };

  getItem = async (
    id: ItemsTable[ItemsTableColumns.ID]
  ): Promise<ColumnsDefault | undefined> => {
    const items = await this.knex<ItemsTable>(Items.tableName)
      .column(...this.columnsDefault)
      .select()
      .where({ [columns.ID]: id });
    return items[0];
  };



  createItem = async (
    input: CreateItemInput
  ): Promise<ColumnsDefault | Error> => {
    const ItemArray = await this.knex<ItemsTable>(Items.tableName).insert(
      {
        [columns.ID]: input.id ?? null,
        [columns.NAME]: input.name,
        [columns.COLOR]: input.color
      },
      this.columnsDefault
    );
    return ItemArray[0];
  };
}

