module.exports = function(routeParams) {

    var route = new routeParams.SparqlRouteJSONLD;
	//route.getApplyModel = function() { return false ; } ;
    route.getContext = function() {
        return {
            "title": {
                "@id": "http://purl.org/dc/terms/title"
            },
            "awardedTender": {
				"@id": "http://purl.org/procurement/public-contracts#awardedTender",
				"@type": "@id"
			},
            "status": {
                "@id": "http://purl.org/procurement/public-contracts-czech#status",
                "@type": "@id"
            },
            "priceNoVAT": {
                "@id": "http://linked.opendata.cz/mfcr/ontology/application/priceNoVAT",
				"@type": "http://www.w3.org/2001/XMLSchema#integer"
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
				"status": ["string", ""],
				"awardedTender": [{ "@id": ["string", ""],
							"priceNoVAT":["number",""],
							"priceVAT":["number",""],
							"supplier": [{ "@id": ["string", ""],
								           "title": ["string", ""]
								}, []
							]
						  }, []
						]
			}
    };

    return route;

};