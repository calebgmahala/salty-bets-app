import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000",
  documents: ["./src/**/*.gql.ts", "./src/**/*.gql.tsx"],
  generates: {
    "src/gql/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
      },
    },
  },
  watch: true,
};
export default config;
