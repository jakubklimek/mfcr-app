module.exports = function(routeParams) {

    var route = new routeParams.SparqlRouteJSONLD;
	//route.getApplyModel = function() { return false ; } ;
    route.getContext = function() {
        return {
            "prefLabel": {
                "@id": "http://www.w3.org/2004/02/skos/core#prefLabel"
            },
            "uj": {
				"@id": "http://linked.opendata.cz/mfcr/ontology/application/uj",
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
            "uj": [{  "@id": ["string", ""],
						"prefLabel":["string",""]}, []]
        }
    };

    return route;

};