import { createConnection } from "mysql2/promise";

const connection = await createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    port: Number(process.env.MYSQLPORT),
    database: process.env.MYSQLDATABASE,
});

Bun.serve({
    port: process.env.PORT || 3001,
    async fetch(request) {
        const [rows] = await connection.execute("SELECT 1+2 AS count");
        return new Response("Hello from Bun!" + JSON.stringify(rows));
    },
});
