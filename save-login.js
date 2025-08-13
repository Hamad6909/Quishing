import { neon } from '@netlify/neon';

export default async (req, context) => {
  const sql = neon();
  const { username, password } = await req.json();

  await sql`
    INSERT INTO logins (username, password)
    VALUES (${username}, ${password})
  `;

  return new Response(
    JSON.stringify({ message: 'Data saved successfully' }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};