module.exports = function(routeParams) {

    var route = new routeParams.SparqlRouteJSONLD;
	//route.getApplyModel = function() { return false ; } ;
    route.getContext = function() {
        return {
            "subject": {
                "@id": "http://purl.org/dc/terms/subject"
            },
            "notation": "http://www.w3.org/2004/02/skos/core#notation",
            "price": {
				"@id": "http://purl.org/goodrelations/v1#hasPriceSpecification",
				"@type": "@id"
			},
            "issued": {
                "@id": "http://purl.org/dc/terms/issued",
				"@type": "http://www.w3.org/2001/XMLSchema#date"
            },
			"currency" : {
				"@id": "http://purl.org/goodrelations/v1#hasCurrency"
			},
            "currencyValue": {
                "@id": "http://purl.org/goodrelations/v1#hasCurrencyValue",
				"@type": "http://www.w3.org/2001/XMLSchema#decimal"
            },
			"vatIncluded" : {
				"@id": "http://purl.org/goodrelations/v1#valueAddedTaxIncluded",
				"@type": "http://www.w3.org/2001/XMLSchema#boolean"
			},
			"smlouvy" : {
					"@id": "http://linked.opendata.cz/ontology/domain/seznam.gov.cz/rejstriky/smlouva",
					"@type" : "@id"
			}
        }
    };

    route.getReconstructComplexObjects = function() {
        return true;
    };

	route.prepareResponse = function(responseJSON) {
        responseJSON["@graph"] = responseJSON["@graph"][0]["smlouvy"];
		return responseJSON ;
    };	
	route.getModel = function() {
        return {
				"@id": ["string", ""],
				"subject": ["string", ""],
				"notation": ["string", ""],
				"issued": ["string", ""],
				"price": [{ "@id": ["string", ""],
							"vatIncluded":["number",""],
							"currency": ["string", ""],
							"currencyValue": ["string", ""]
						  }, []
						]
			}
    };

    return route;

};