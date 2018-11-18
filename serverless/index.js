const request = require('request');

module.exports.get = (evt, ctx, cb) => {
    const maxImages = process.env.max_images
    const giphyPath = `${process.env.giphy_url}${process.env.giphy_endpoint}`
    const giphyQuery = process.env.giphy_query
    const giphyApiKey = process.env.giphy_api_key
    const requestUrl = `${giphyPath}?api_key=${giphyApiKey}&q="${giphyQuery}"&limit=${maxImages}`
    request(requestUrl, function (error, response, body) {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'application/json'
        }
        if (error || response.statusCode != 200) {
            console.log(error || response.body)
            cb(null, {
                statusCode: 500,
                headers,
                body: JSON.stringify({
                    err: 'The was an error retrieving the images from Giphy'
                })
            })
        } else {
            const imageResponse = {
                statusCode: 200,
                headers,
                body: JSON.stringify(JSON.parse(body).data[Math.round(Math.random() * (maxImages - 1))].images.original)
            }
            cb(null, imageResponse)
        }
    })
}