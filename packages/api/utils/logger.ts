import pino from "pino";

/**
 * logger instance that we use to log info, debug, and error message
 */
export const logger = pino({
  level: import.meta.env.VITE_LOG_LEVEL ?? "info",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: false,
    },
  },
});

logger;
