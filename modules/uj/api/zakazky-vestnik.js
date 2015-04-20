module.exports = function(routeParams) {

    var route = new routeParams.SparqlRouteJSONLD;
	//route.getApplyModel = function() { return false ; } ;
    route.getContext = function() {
        return {
            "title": {
                "@id": "http://purl.org/dc/terms/title",
				"@language": "cs"
            },
            "awardedTender": {
				"@id": "http://purl.org/procurement/public-contracts#awardedTender",
				"@type": "@id"
			},
            "priceNoVAT": {
                "@id": "http://linked.opendata.cz/mfcr/ontology/application/priceNoVAT",
				"@type": "http://www.w3.org/2001/XMLSchema#decimal"
            },
            "ePriceNoVAT": {
                "@id": "http://linked.opendata.cz/mfcr/ontology/application/ePriceNoVAT",
				"@type": "http://www.w3.org/2001/XMLSchema#decimal"
            },
            "priceVAT": {
                "@id": "http://linked.opendata.cz/mfcr/ontology/application/priceVAT",
				"@type": "http://www.w3.org/2001/XMLSchema#decimal"
            },
			"currency" : "http://purl.org/goodrelations/v1#hasCurrency",
            "supplier": {
                "@id": "http://purl.org/procurement/public-contracts#supplier",
				"@type": "@id"
            },
			"legalName": "http://purl.org/goodrelations/v1#legalName",
			"vatIncluded" : "http://purl.org/goodrelations/v1#valueAddedTaxIncluded",
        }
    };

    route.getReconstructComplexObjects = function() {
        return true;
    };

	route.prepareResponse = function(responseJSON) {
        responseJSON["@graph"] = responseJSON["@graph"];
		return responseJSON ;
    };	
	route.getModel = function() {
        return {
				"@id": ["string", ""],
				"title": ["string", ""],
				"awardedTender": [{ "@id": ["string", ""],
							"priceNoVAT":["number",""],
							"priceVAT":["number",""],
							"ePriceNoVAT":["number",""],
							"supplier": [{ "@id": ["string", ""],
								           "legalName": ["string", ""]
								}, []
							]
						  }, []
						]
			}
    };

    return route;

};