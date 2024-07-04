import axios from "axios";
import chalk from "chalk";
import { logger } from "../logger";

const saltyBoy = axios.create({
  baseURL: import.meta.env.VITE_SALTY_BOY_API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

saltyBoy.interceptors.request.use(
  (request) => {
    logger.debug(request, chalk.greenBright("salty-boy API called"));
    return request;
  },
  (error) => {
    logger.info(error, chalk.redBright("salty-boy API request error"));
    throw error;
  }
);

saltyBoy.interceptors.response.use(
  (response) => {
    logger.debug(chalk.greenBright("salty-boy API success!"));
    return response;
  },
  (error) => {
    logger.info(error, chalk.redBright("salty-boy API response error"));
    throw error;
  }
);

export default saltyBoy;
