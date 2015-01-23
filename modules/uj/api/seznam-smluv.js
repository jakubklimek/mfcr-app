module.exports = function(routeParams) {

    var route = new routeParams.SparqlRouteJSONLD;
	//route.getApplyModel = function() { return false ; } ;
    route.getContext = function() {
        return {
            "subject": {
                "@id": "http://purl.org/dc/terms/subject"
            },
            "notation": "http://www.w3.org/2004/02/skos/core#notation",
            "price": "http://purl.org/goodrelations/v1#priceSpecification",
            "issued": {
                "@id": "http://purl.org/dc/terms/issued",
				"@type": "http://www.w3.org/2001/XMLSchema#date"
            },
			"currency" : "http://purl.org/goodrelations/v1#hasCurrency",
            "currencyValue": {
                "@id": "http://purl.org/goodrelations/v1#hasCurrencyValue",
				"@type": "http://www.w3.org/2001/XMLSchema#decimal"
            },
			"vatIncluded" : "http://purl.org/goodrelations/v1#valueAddedTaxIncluded",
			"smlouvy" : "http://linked.opendata.cz/ontology/domain/seznam.gov.cz/rejstriky/smlouva"
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
							"vatIncluded":["string",""],
							"currency": ["string", ""],
							"currencyValue": ["string", ""]
						  }, []
						]
			}
    };

    return route;

};