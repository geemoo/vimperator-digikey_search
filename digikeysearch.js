/**
 * Plugin which will use digikey's search engine to search for the string you enter
 *
 * Usage:
 *   :dk <search terms>
 *   :digikey <search terms>
 *
 * TODO
 *   - automatically load the datasheet of the partnumber searched for
 *
 * @author Jean Richard (jean@geemoo.ca)
 * @version 0.1
 */

commands.add(
	["digikey"], "Uses digikey search to find your search string.", function(args) { digisearch(args.string); }
);
commands.add(
	["dk"], "Uses digikey search to find your search string.", function(args) { digisearch(args.string); }
);

function digisearch(searchstr) {
	
	// form the url we need to search with
	var search_url = 'http://search.digikey.com/scripts/DkSearch/dksus.dll?vendor=0&keywords=' + searchstr;

	// open a new window with that url
	liberator.open(search_url, liberator.NEW_TAB);
}
