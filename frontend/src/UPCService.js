const axios = require('axios')

const lookupUPC = upc => {
    // return axios.get(`https://world.openfoodfacts.org/api/v0/product/${upc}.json`)
    return axios.get(`https://world.openfoodfacts.org/api/v0/product/072250037068.json`)
}

const UPCService = { lookupUPC }

export default UPCService