/**
 * Created by marco on 17.6.2016.
 */
export default function (state = null, action) {

    return [
        { name: "Outside temperature",
            usage_token: "usagetoken.temperature",
            lat: 61.466473,
            lon: 24.050716},
        { name: "Kitchen temperature",
            usage_token: "usagetoken.temperature",
            lat: 61.466306,
            lon: 24.050828}

    ]

}