exports.up = function(knex, Promise) {
    // create the 'images' table with four columns
    return knex.schema.createTable("images", (t) => {
        t.increments() // auto-incrementing id column
        .index(); // index this column
  
        t.string("side_r")
        .notNullable(); // add a not-null constraint to this column

        t.string("action")
        .notNullable(); // add a not-null constraint to this column

        t.string("display")
        .notNullable(); // add a not-null constraint to this column

    });
  };
  
  exports.down = function(knex, Promise) {
    // undo this migration by destroying the 'images' table
    return knex.schema.dropTable("images");
  };