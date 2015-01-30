module.exports = function(routeParams) {

    var route = new routeParams.SparqlRouteJSONLD;
	//route.getApplyModel = function() { return false ; } ;
    route.getContext = function() {
        return {
            "prefLabel": {
				"@id" : "http://www.w3.org/2004/02/skos/core#prefLabel",
				"@language": "cs"
			},
			"address": {
                "@id": "http://linked.opendata.cz/mfcr/ontology/application/address"
            },
            "stavebniObjekt": "http://ruian.linked.opendata.cz/ontology/stavebniObjekt",
			"hasPOS" : "http://schema.org/hasPOS",
			"geo" : "http://schema.org/geo",
			"openingHoursSpecification" : "http://schema.org/openingHoursSpecification",
			"closes" : {
				"@id" : "http://schema.org/closes",
				"@type" : "http://www.w3.org/2001/XMLSchema#time",
			},
			"opens" : {
				"@id" : "http://schema.org/opens",
				"@type" : "http://www.w3.org/2001/XMLSchema#time",
			},
			"dayOfWeek" : "http://schema.org/dayOfWeek",
			"latitude" : "http://schema.org/latitude",
			"longitude" : "http://schema.org/longitude",
			"vybaveniVytahem" : "http://ruian.linked.opendata.cz/ontology/vybaveniVytahem",
            "pocetPodlazi": {
				"@id": "http://ruian.linked.opendata.cz/ontology/pocetPodlazi",
				"@type": "http://www.w3.org/2001/XMLSchema#integer"
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
			"hasPOS": [{ "@id": ["string", ""],
						"address":["string",""],
						"geo": [ {
							"@id": ["string", ""],
							"latitude": ["string", ""],
							"longitude": ["string", ""]
						},[]],
						"stavebniObjekt": [ {
							"@id": ["string", ""],
							"pocetPodlazi": ["number", 0],
							"vybaveniVytahem": [{  "@id": ["string", ""],
										"prefLabel":["string",""]}, []]
						},[]],
						"openingHoursSpecification": [ {
							"@id": ["string", ""],
							"closes": ["string", ""],
							"opens": ["string", ""],
							"dayOfWeek": ["string", ""]
						},[]]
					  }, []
					]
        }
    };

    return route;

};