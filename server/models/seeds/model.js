
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('model').del()
    .then(function () {
      // Inserts seed entries
      return knex('model').insert([
        {brand_id: 1, model: 'R6', size: '600cc', side_r: 'url', action: 'url', display: 'url'},
        {brand_id: 1, model: 'R1', size: '1000cc', side_r: 'url', action: 'url', display: 'url'},
        {brand_id: 2, model: 'GSX-R750', size: '750cc', side_r: 'url', action: 'url', display: 'url'},
        {brand_id: 2, model: 'GSX-R1000', size: '1000cc', side_r: 'url', action: 'url', display: 'url'},
        {brand_id: 3, model: 'CBR600RR', size: '600cc', side_r: 'url', action: 'url', display: 'url'},
        {brand_id: 3, model: 'CBR1000RR', size: '1000cc', side_r: 'url', action: 'url', display: 'url'},
      ]);
    });
};
