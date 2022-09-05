import { faker } from '@faker-js/faker'
import type { User } from '@prisma/client'

export const userGenerator = (overrides?: Partial<User>): User => ({
  id: faker.datatype.uuid(),
  firstName: faker.internet.userName(),
  lastName: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  createdAt: faker.date.past(),
  emailVerified: faker.date.past(),
  image: faker.internet.avatar(),
  updatedAt: faker.date.recent(),
  username: faker.internet.userName(),
  ...overrides,
})
