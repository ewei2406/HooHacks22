const axios = require('axios')

const lookupUPC = upc => {
    return axios.get(`https://world.openfoodfacts.org/api/v0/product/${upc}.json`)
    // return axios.get(`https://world.openfoodfacts.org/api/v0/product/072250037068.json`)
        .then(data => {
            console.log(data)
            return {
                food_groups: data.data.product.food_groups || "No Data",
                allergens_from_ingredients: data.data.product.allergens_from_ingredients || "No Data",
                ingredients: data.data.product.ingredients || [],
                brands: data.data.product.brands || "",
                brand_owner: data.data.product.brand_owner || "",
                product_name: data.data.product.product_name || "",
                code: data.data.code || "Unknown",
                nutriscore: typeof data.data.product.nutriscore_score !== 'undefined' ? data.data.product.nutriscore_score : -999,
                carbonFootprint: data.data.product.ecoscore_data.agribalyse ? data.data.product.ecoscore_data.agribalyse.co2_total || -999 : -999,
                ecoscore: data.data.product.ecoscore_data.ecoscore_score || -999,
                novagroup: data.data.product.nova_group || -999
            }
        })
}

const UPCService = { lookupUPC }

export default UPCService