import database from "infra/database.js";

async function status(resquest, response) {
  const updatedAt = new Date().toISOString();
  const pgVersion = await database.query("SHOW server_version;");
  const pgMaxConnections = await database.query("SHOW max_connections;");
  const pgCurrentConnected = await database.query({
    text: "SELECT COUNT(*) FROM pg_stat_activity WHERE datname = $1;",
    values: [process.env.POSTGRES_DB],
  });

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: pgVersion.rows[0].server_version,
        max_connections: Number(pgMaxConnections.rows[0].max_connections),
        opened_connections: Number(pgCurrentConnected.rows[0].count),
      },
    },
  });
}

export default status;
