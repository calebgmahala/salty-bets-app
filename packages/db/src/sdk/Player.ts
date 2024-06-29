import Players, {
  PlayersTable,
  PlayersTableColumns,
  PlayersTableWithoutPassword,
} from "../schemas/players";
import { Service, ServiceArgs } from "../types";

export interface CreatePlayerInput {
  id?: number;
  username: string;
  password: string;
  balance?: number;
}

const columns = PlayersTableColumns;

export class PlayerService extends Service {
  constructor(service: ServiceArgs) {
    super(service);
  }

  columnsWithoutPassword = [
    columns.ID,
    columns.USERNAME,
    columns.BALANCE,
    columns.IS_ADMIN,
  ];

  getPlayers = async (): Promise<PlayersTableWithoutPassword[]> => {
    const players = await this.knex<PlayersTable>(Players.tableName)
      .column(...this.columnsWithoutPassword)
      .select();
    return players;
  };

  getPlayer = async (
    id: PlayersTable[PlayersTableColumns.ID]
  ): Promise<PlayersTableWithoutPassword | undefined> => {
    const players = await this.knex<PlayersTable>(Players.tableName)
      .column(...this.columnsWithoutPassword)
      .select()
      .where({ [columns.ID]: id });
    return players[0];
  };

  createPlayer = async (
    input: CreatePlayerInput
  ): Promise<PlayersTableWithoutPassword | Error> => {
    const playerArray = await this.knex<PlayersTable>(Players.tableName).insert(
      {
        [columns.ID]: input.id ?? null,
        [columns.USERNAME]: input.username,
        [columns.PASSWORD]: input.password,
        [columns.BALANCE]: input.balance ?? 0,
        [columns.IS_ADMIN]: false,
      },
      this.columnsWithoutPassword
    );
    return playerArray[0];
  };
}
