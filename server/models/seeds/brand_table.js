
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('brand').del()
    .then(function () {
      // Inserts seed entries
      return knex('brand').insert([
        {brand: 'Yamaha', logo: 'https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/home/home_logo_yamaha.png'},
        {brand: 'Suzuki', logo: 'http://www.suzukicycles.com/~/media/Suzuki/logos/logo.ashx?sc_lang=en'},
        {brand: 'Honda', logo: 'https://trojanpowersports.com/portals/trojanpowersports3/Skins/trojanpowersports3-2015/images/TrojanPowersports-HondaLogo.jpg'}
      ]);
    });
};
