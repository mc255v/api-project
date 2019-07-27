exports.up = function(knex, Promise) {
    // create the 'brand' table with three columns
    return knex.schema.createTable("brand", (t) => {
      t.increments() // auto-incrementing id column
        .index(); // index this column
  
      t.string("brand")
        .unique() // add a unique constraint to this column
        .notNullable(); // add a not-null constraint to this column

      t.string("logo")
      .notNullable(); // add a not-null constraint to this column
    });
  };
  
  exports.down = function(knex, Promise) {
    // undo this migration by destroying the 'brand' table
    return knex.schema.dropTable("brand");
  };