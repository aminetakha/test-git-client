const { drizzle } = require("drizzle-orm/mysql2");
const mysql = require("mysql2/promise");
const { users } = require("./db/schema/users");
const { sql, eq } = require("drizzle-orm");

const main = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "uzerly",
    password: "123456",
  });

  const db = drizzle(connection);

  //   const results = await db.select().from(users);

  const results = await db
    .select({
      firstName: sql`upper(${users.first_name})`,
      email: users.email,
      id: users.id,
    })
    .from(users)
    .where(eq(users.id, 2), eq(users.id, 3));

  console.log(results);
};

main();
