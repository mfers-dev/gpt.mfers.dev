import { mfers, colors } from 'mfers'
import fs from 'fs-extra'

fs.ensureDirSync(`./public/descriptions`)
mfers.forEach(({ i, traits, description }) => {
  fs.writeFileSync(`./public/descriptions/${i}.json`,JSON.stringify({
    description,
    traits
  },null,2))
})