import pino from "pino";

export const logger = pino({
  level: import.meta.env.VITE_LOG_LEVEL,
  transport: {
    target: "pino-pretty",
    options: {
      colorize: false,
    },
  },
});

logger;
