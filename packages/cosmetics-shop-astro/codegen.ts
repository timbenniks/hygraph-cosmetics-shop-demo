import type { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'

const config: CodegenConfig = {
  schema: process.env.ASTRO_HYGRAPH_ENDPOINT,
  documents: ["./src/queries/*"],
  ignoreNoDocuments: true,
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [],
      config: {
        useTypeImports: true
      }
    },
  },
}

export default config