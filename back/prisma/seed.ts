import { PrismaClient } from '@prisma/client'
import * as authUtils from '../src/utils/auth'
const prisma = new PrismaClient()
async function main() {
  const alice = await prisma.user.upsert({
    where: { login: 'letscode'  },
    update: {},
    create: {
      login: 'letscode',
      name: 'Usuario',
      password: await authUtils.generatePasswordHash("lets@123")
    },
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })