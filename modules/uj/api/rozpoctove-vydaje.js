module.exports = function(routeParams) {

    var route = new routeParams.SparqlRouteJSONLD;
	//route.getApplyModel = function() { return false ; } ;
    route.getContext = function() {
        return {
            "prefLabel": {
			 "@id" : "http://www.w3.org/2004/02/skos/core#prefLabel"
			},
			"polozka": {
                "@id": "http://linked.opendata.cz/ontology/mfcr/application/polozka",
				"@type": "@id"
            },
            "refPeriod": {
                "@id": "http://linked.opendata.cz/ontology/mfcr/application/refPeriod",
                "@type": "@id"
            },
            "vysledek": {
				"@id": "http://linked.opendata.cz/ontology/mfcr/application/vysledek",
				"@type": "http://www.w3.org/2001/XMLSchema#decimal"
			}
        }
    };

    route.getReconstructComplexObjects = function() {
        return true;
    };

    route.getModel = function() {
        return {
            "@id": ["string", ""],
            "refPeriod": ["string", ""],
            "vysledek": ["number", 0],
            "polozka": [{  "@id": ["string", ""],
						"prefLabel":["string",""]}, []]
        }
    };

    return route;

};