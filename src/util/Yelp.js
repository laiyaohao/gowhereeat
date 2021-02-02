const apiKey = `vV5XR3Y1zQrbzuxN4qXXUllYYagHQfzn_aOnFwZNDo5YcX6vK1_0pcg55H1PU-Q2c-UrQcLYsOGjhPIDQiHV08a4UAtSMnRrsa-BNN9PUhTgplRgiscT-Y6nvucYYHYx`

const Yelp = {
    search: function(term,location,sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map((business) => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                        url: business.url
                    }
                })
            }
        })
    }
}
export default Yelp;