exports.up = function(knex, Promise) {
    // create the 'model' table with seven columns
    return knex.schema.createTable("model", (t) => {
        t.increments() // auto-incrementing id column
        .index(); // index this column
  
        t.integer("brand_id")
        .notNullable(); // add a not-null constraint to this column

        t.string("model")
        .unique() // add a unique constraint to this column
        .notNullable(); // add a not-null constraint to this column

        t.string("size")
        .notNullable(); // add a not-null constraint to this column

        t.string("side_r")
        .notNullable(); // add a not-null constraint to this column

        t.string("action")
        .notNullable(); // add a not-null constraint to this column

        t.string("display")
        .notNullable(); // add a not-null constraint to this column
    });
  };
  
  exports.down = function(knex, Promise) {
    // undo this migration by destroying the 'model' table
    return knex.schema.dropTable("model");
  };