const axios = require('axios')

const lookupUPC = upc => {
    return axios.get(`https://world.openfoodfacts.org/api/v0/product/${upc}.json`)
    // return axios.get(`https://world.openfoodfacts.org/api/v0/product/072250037068.json`)
        .then(data => {
            console.log(data)
            return {
                food_groups: data.data.product.food_groups || "",
                allergens_from_ingredients: data.data.product.allergens_from_ingredients || "",
                ingredients: data.data.product.ingredients || [],
                brands: data.data.product.brands || "",
                brand_owner: data.data.product.brand_owner || "",
                product_name: data.data.product.product_name || ""
            }
        })
}

const UPCService = { lookupUPC }

export default UPCService