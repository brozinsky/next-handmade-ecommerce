import {defineConfig, isDev} from 'sanity'
import {structureTool} from 'sanity/structure'
import {deskTool} from 'sanity/desk'
import product from './sanity/schemas/product'
import category from './sanity/schemas/category'
import blockContent from './sanity/schemas/blockContent'
import color from './sanity/schemas/color'
import content from './sanity/schemas/content'
import shipping from './sanity/schemas/shipping'

export default defineConfig({

  title: 'sznurkowe',

  projectId: '4kjoa8dx',

  dataset: 'production',

  basePath: "/admin",

  plugins: [deskTool()],

  schema: {
    types: [product, category, blockContent, color, content, shipping],
  },
})

