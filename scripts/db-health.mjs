// scripts/db-health.mjs
// Why: Quick sanity check for connection + seeded data without opening a SQL console.

import { db } from '@vercel/postgres';

async function main() {
  if (!process.env.POSTGRES_URL) {
    console.error('Missing POSTGRES_URL');
    process.exit(1);
  }

  const client = await db.connect();      // pooled client (works with pooled DSN)
  try {
    const { rows: t } = await client.sql`SELECT COUNT(*)::int AS c FROM topics;`;
    const { rows: q } = await client.sql`SELECT COUNT(*)::int AS c FROM questions;`;

    console.log('DB OK ✅');
    console.log('topics:', t[0]?.c ?? 0);
    console.log('questions:', q[0]?.c ?? 0);
  } finally {
    client.release();                     // why: return connection to pool
  }
}

main().catch((err) => {
  console.error('DB check failed ❌');
  console.error(err);
  process.exit(1);
});
