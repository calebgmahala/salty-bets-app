import chalk from "chalk";
import { unlink } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Build file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Delete DB

const main = () => {
  console.info("Deleting DB...");
  unlink(path.resolve(__dirname, "../db.sqlite"), (err) => {
    if (err) {
      if (err.code === "ENOENT") {
        console.info(chalk.yellowBright("DB does not exist, skipping"));
      } else {
        console.error(err);
      }
    } else {
      console.info(chalk.greenBright("Success!"));
    }
  });
};

main();
