// Postgres (pg)
const { Pool } = require("pg");

if (!process.env.PGUSER) throw new Error(`.env PGUSER not set`);
if (!process.env.PGPASSWORD) throw new Error(`.env PGPASSWORD not set`);
if (!process.env.PGHOST) throw new Error(`.env PGHOST not set`);
if (!process.env.PGPORT) throw new Error(`.env PGPORT not set`);
if (!process.env.PGDATABASE) throw new Error(`.env PGDATABASE not set`);
const pool = new Pool({
  connectionString: `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`,
});

// Connect to database, do query, then release database connection
const query = async (sqlString) => {
  try {
    // const client = await pool.connect();
    // console.log(client);
    pool.query("SELECT NOW()", (err, res) => {
      console.log(err, res);
      pool.end();
    });
    const results = await pool.query(sqlString);
    // client.release()
    return results;
  } catch (error) {
    return { error };
  }
};

export default pool;
