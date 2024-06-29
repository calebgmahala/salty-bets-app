import Players, {
  PlayersTable,
  PlayersTableColumns,
  PlayersTableWithoutPrivateInfo,
} from "../schemas/players";
import { Service, ServiceArgs } from "../types";
import { v4 as uuidv4 } from "uuid";

export interface LoginInput {
  id?: number;
  username: string;
  password: string;
  balance?: number;
}

const columns = PlayersTableColumns;

export class AuthenticationService extends Service {
  constructor(service: ServiceArgs) {
    super(service);
  }

  columns = [
    columns.ID,
    columns.USERNAME,
    columns.PASSWORD,
    columns.BALANCE,
    columns.IS_ADMIN,
    columns.LOGIN_TOKEN,
  ];

  login = async (input: LoginInput): Promise<PlayersTable> => {
    const token = uuidv4();
    const playerArray = await this.knex<PlayersTable>(Players.tableName)
      .where({
        [columns.USERNAME]: input.username,
        [columns.PASSWORD]: input.password,
      })
      .update({ loginToken: token }, this.columns);
    return playerArray[0];
  };

  findUserBasedOnToken = async (
    token: PlayersTable[PlayersTableColumns.LOGIN_TOKEN]
  ): Promise<PlayersTable | undefined> => {
    const players = await this.knex<PlayersTable>(Players.tableName)
      .column(...this.columns)
      .select()
      .where({ [columns.LOGIN_TOKEN]: token });
    return players[0];
  };
}
