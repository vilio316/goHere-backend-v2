import { prisma } from './prisma';

async function main() {
  const connection = await prisma.$queryRaw`
    SELECT
      current_database() AS database,
      current_user AS user
  `;

  console.log('Connection:');
  console.log(connection);

  const schemas = await prisma.$queryRaw`
    SELECT schema_name
    FROM information_schema.schemata
    WHERE schema_name IN ('public', 'auth', 'app')
    ORDER BY schema_name
  `;

  console.log('Schemas:');
  console.log(schemas);

  const publicTables = await prisma.$queryRaw`
    SELECT COUNT(*)::int AS count
    FROM information_schema.tables
    WHERE table_schema = 'public'
  `;

  console.log('Public tables:');
  console.log(publicTables);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
