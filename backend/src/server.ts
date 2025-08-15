import app from "./app.js";
import config from "./config/config.js";
import chalk from "chalk";
import sqlInstance from "./db.js";

app.listen(config.port, async () => {
  console.log(chalk.greenBright(`Server running on port ${config.port}`));

  try {
    const [result] = await sqlInstance.query(`SELECT 1 + 1 as addition`);
    console.log(chalk.greenBright(`${JSON.stringify(result)}`));
  } catch (error) {
    console.log(chalk.redBright(`${JSON.stringify(error)}`));
  }
});
