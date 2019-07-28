const config = require("../models/knexConfig");
const knex = require("knex")(config.db);

module.exports = {
    getBrandList() {
        return knex('brand');
    },

    getBrandModels(brand) {
        // select brand.brand, model.model, model.size, model.side_r, model.action, model.display 
        // from brand join model on brand.id = model.brand_id where lower(brand.brand) = 'yamaha';
        return knex('brand')
        .select('brand.brand', 'brand.logo', 'model.model', 'model.size')
        .join('model', 'brand.id', 'model.brand_id')
        .whereRaw('lower(brand.brand) = ?', [brand]);
    },

    getModel(params) {
        return knex('brand')
        .select('brand.brand', 'brand.logo', 'model.model', 'model.size', 'model.side_r', 'model.action', 'model.display')
        .join('model', 'brand.id', 'model.brand_id')
        .whereRaw('lower(brand.brand) = ?', [params.brand.toLowerCase()])
        .whereRaw('lower(model.model) = ?', [params.model.toLowerCase()]);
    },

    createModel(brand, reqBody) {
        let brandId;
        switch(brand.toLowerCase()) {
            case 'yamaha':
                brandId = 1;
              break;
            case 'suzuki':
                brandId = 2;
              break;
            case 'honda':
                brandId = 3;
        }

        return knex("model")
        .insert({
            brand_id: brandId, 
            model: reqBody.model, 
            size: reqBody.size, 
            side_r: reqBody.side_r, 
            action: reqBody.action, 
            display: reqBody.display
        })
        .then(() => this.getBrandModels(brand.toLowerCase()));
    }
}