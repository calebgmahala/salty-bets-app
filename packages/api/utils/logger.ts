import pino from "pino";

/**
 * logger instance that we use to log info, debug, and error message
 */
export const logger = pino({
  level: "debug",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: false,
    },
  },
});

logger;
