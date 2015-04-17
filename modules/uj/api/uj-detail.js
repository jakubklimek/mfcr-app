module.exports = function(routeParams) {

    var route = new routeParams.SparqlRouteJSONLD;
	//route.getApplyModel = function() { return false ; } ;
    route.getContext = function() {
        return {
            "prefLabel": {
                "@id": "http://www.w3.org/2004/02/skos/core#prefLabel"
            },
            "adresa": "http://linked.opendata.cz/ontology/domain/mfcr/monitor/ciselniky/adresa",
            "druh": {
				 "@id": "http://linked.opendata.cz/ontology/domain/mfcr/monitor/ciselniky/druhUcetniJednotky",
				 "@type": "@id"
			},
			
            "poddruh": {
				"@id": "http://linked.opendata.cz/ontology/domain/mfcr/monitor/ciselniky/poddruhUcetniJednotky",
				"@type": "@id"
			}
        }
    };

    route.getReconstructComplexObjects = function() {
        return true;
    };

    route.getModel = function() {
        return {
            "@id": ["string", ""],
            "prefLabel": ["string", ""],
            "adresa": ["string", {}],
            "druh": [{  "@id": ["string", ""],
						"prefLabel":["string",""]}, []],
            "poddruh": [{  "@id": ["string", ""],
							"prefLabel":["string",""]}, []],
        }
    };

    return route;

};