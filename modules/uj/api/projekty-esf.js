module.exports = function(routeParams) {

    var route = new routeParams.SparqlRouteJSONLD;
	//route.getApplyModel = function() { return false ; } ;
    route.getContext = function() {
        return {
            "title": {
                "@id": "http://purl.org/dc/terms/title",
				"@language": "cs"
            },
            "totalAmountPaid": {
                "@id": "http://linked.opendata.cz/mfcr/ontology/application/totalAmountPaid",
				"@type": "http://www.w3.org/2001/XMLSchema#decimal"
            },
            "allocationDate": {
                "@id": "http://linked.opendata.cz/mfcr/ontology/application/allocationDate",
				"@type": "http://www.w3.org/2001/XMLSchema#date"
            },
            "allocatedPayment": {
                "@id": "http://linked.opendata.cz/mfcr/ontology/application/allocatedPayment",
				"@type": "http://www.w3.org/2001/XMLSchema#decimal"
            }
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
				"totalAmountPaid": ["number", ""],
				"allocationDate": ["string", ""],
				"allocatedPayment": ["number", ""]
			}
    };

    return route;

};