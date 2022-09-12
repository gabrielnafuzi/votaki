import { PrismaClient } from '@prisma/client'

import { categories } from './categories'

const prisma = new PrismaClient()

const main = async () => {
  await prisma.pollCategory.deleteMany({})
  await prisma.pollCategory.createMany({ data: categories })
}

main()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.log(`Error seeding data: ${e}`)

    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect()
  })
