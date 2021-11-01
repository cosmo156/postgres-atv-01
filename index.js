const { Pool } = require('pg');

async function conexao(){
  const pool = new Pool({
    connectionString: process.env['db_url'],

    ssl: {
      rejectUnauthorized: false
    }
  });
  await pool.connect();
  const res = await pool.query('SELECT * from cosmo')
  console.log(res.rows);
  
  /*await pool.query(
    `Create table cosmo(
      id serial primary key,
      nome varchar
     );`);
    
  pool.release();*/

  
}
conexao();