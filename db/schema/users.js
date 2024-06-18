const {
  mysqlTable,
  serial,
  varchar,
  longtext,
  tinyint,
  datetime,
  int,
} = require("drizzle-orm/mysql-core");

const users = mysqlTable("Users", {
  id: serial("id").autoincrement().primaryKey(),
  first_name: varchar("first_name", { length: 255 }),
  last_name: varchar("last_name", { length: 255 }),
  email: varchar("email", { length: 255 }),
  password: varchar("password", { length: 255 }),
  salt: varchar("salt", { length: 255 }),
  role: varchar("role", { length: 255 }),
  note: longtext("note"),
  verification_id: varchar("verification_id", { length: 255 }),
  active: tinyint("active", { unsigned: true }),
  provider_auth: tinyint("provider_auth", { unsigned: true }),
  active_date: datetime("active_date"),
  created_at: datetime("created_at"),
  updated_at: datetime("updated_at"),
  role_id: int("role_id"),
  user_id: int("user_id"),
  permission_id: int("permissionId"),
});

module.exports = {
  users,
};
