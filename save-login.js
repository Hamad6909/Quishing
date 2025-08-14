import { supabase } from '@netlify/Fauna';

export default async (req, context) => {
  const sql = Fauna();
  const { username, username } = await req.json();

  await sql`
    INSERT INTO logins (username, username)
    VALUES (${username}, ${username})
  `;

  return new Response(
    JSON.stringify({ message: 'Data saved successfully' }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );

};

