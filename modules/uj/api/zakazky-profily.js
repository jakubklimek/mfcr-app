module.exports = function(routeParams) {

    var route = new routeParams.SparqlRouteJSONLD;
	//route.getApplyModel = function() { return false ; } ;
    route.getContext = function() {
        return {
            "title": {
                "@id": "http://purl.org/dc/terms/title"
            },
            "awardedTender": "http://purl.org/procurement/public-contracts#awardedTender",
            "status": "http://purl.org/procurement/public-contracts-czech#status",
            "priceNoVAT": {
                "@id": "http://linked.opendata.cz/mfcr/ontology/application/priceNoVAT"
            },
            "priceVAT": {
                "@id": "http://linked.opendata.cz/mfcr/ontology/application/priceVAT"
            },
			"currency" : "http://purl.org/goodrelations/v1#hasCurrency",
            "supplier": {
                "@id": "http://purl.org/procurement/public-contracts#supplier"
            },
			"vatIncluded" : "http://purl.org/goodrelations/v1#valueAddedTaxIncluded",
			"smlouvy" : "http://linked.opendata.cz/ontology/domain/seznam.gov.cz/rejstriky/smlouva"
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