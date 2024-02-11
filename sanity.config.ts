import {defineConfig, isDev} from 'sanity'
import {structureTool} from 'sanity/structure'
import {deskTool} from 'sanity/desk'
import product from './sanity/schemas/product'
import category from './sanity/schemas/category'
import blockContent from './sanity/schemas/blockContent'

export default defineConfig({

  title: 'sznurkowe',

  projectId: '4kjoa8dx',

  dataset: 'production',

  basePath: "/admin",

  plugins: [deskTool()],

  schema: {
    types: [product, category, blockContent],
  },
})

