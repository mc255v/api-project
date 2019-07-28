const config = require("../server/models/knexConfig");
const knex = require("knex")(config.db);

const ignoreError = () => {
  // do nothing
};

const clearTable = (tableName) =>
  knex.schema
    .dropTableIfExists(tableName)
    .catch(ignoreError);

const tables = ["brand", "model", "knex_migrations", "knex_migrations_lock"];

Promise.all(tables.map(clearTable)).then(process.exit);
