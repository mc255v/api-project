const config = require("../models/knexConfig");
const knex = require("knex")(config.db);

function brandId(value) {
        switch(value.toLowerCase()) {
            case 'yamaha':
                return 1;
            case 'suzuki':
                return 2;
            case 'honda':
                return 3;
        }
}

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
        return knex('model')
        .insert({
            brand_id: brandId(brand), 
            model: reqBody.model, 
            size: reqBody.size, 
            side_r: reqBody.side_r, 
            action: reqBody.action, 
            display: reqBody.display
        })
        .then(() => this.getBrandModels(brand.toLowerCase()));
    },

    updateModel(params, reqBody) {
        return knex('model')
        .whereRaw('lower(model.model) = ?', [params.model.toLowerCase()])
        .update(reqBody)
        .then(() => {
            return this.getModel(params);
        });
    },

    deleteModel(params) {
        return knex('model')
        .whereRaw('lower(model.model) = ?', [params.model.toLowerCase()])
        .del();
    }
}