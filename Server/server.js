const express = require('express');
const app = express();
const port = 8080;
const CognitiveServicesCredentials = require('ms-rest-azure').CognitiveServicesCredentials;
const WebSearchAPIClient = require('azure-cognitiveservices-websearch');
const apiKey = "a2312eb3ed0940269e0955a87e82f318";
var cors = require('cors');

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(cors())

let credentials = new CognitiveServicesCredentials(apiKey);
let webSearchApiClient = new WebSearchAPIClient(credentials);

// `buy ${bikeName} in ${city}`

app.get('/', function(req, res){
    var city = req.query.city;
    var bike = req.query.bike;
    webSearchApiClient.web.search(`buy ${bike} in ${city} `).then((result) => {
        res.json(result.webPages.value);
        // let properties = ["bike", "toronto"];
        // for (let i = 0; i < properties.length; i++) {
        //     if (result[properties[i]]) {
        //         res.json(result[properties[i]].value);
        //     } else {
        //         console.log(`No ${properties[i]} data`);
        //     }
        // }
    }).catch((err) => {
        throw err;
    })
  });

app.listen(port, () => {
    console.log(`we are on the ${port} port, baby`)
});