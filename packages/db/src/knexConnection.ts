import knexInit from "knex";
import path from "path";
import { fileURLToPath } from "url";

//Build file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// DB connection
export default knexInit({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "../db.sqlite"),
  },
  useNullAsDefault: true,
});
