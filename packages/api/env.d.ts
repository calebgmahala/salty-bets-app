/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LOG_LEVEL: string;
  readonly VITE_SALTY_BOY_API_ENDPOINT: string;
  readonly VITE_PORT: number;
}
