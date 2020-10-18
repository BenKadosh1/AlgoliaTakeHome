// For the default version
const algoliasearch = require("algoliasearch");

const client = algoliasearch("xxxxxxxxxxxxxxxxxxx", "xxxxxxxxxxxxxxxxxx");
const index = client.initIndex("movies_search");

const contactsJSON = require("./recordsPart1.json");
const contactsJSON = require("./recordsPart2.json");

index
  .saveObjects(contactsJSON, {
    autoGenerateObjectIDIfNotExist: true,
  })
  .then(({ objectIDs }) => {
    console.log(objectIDs);
  });

// https://www.algolia.com/doc/api-reference/api-parameters/searchableAttributes/?utm_medium=page_link&utm_source=dashboard#examples
// https://www.algolia.com/doc/guides/managing-results/must-do/searchable-attributes/

index
  .setSettings({
    searchableAttributes: [
      "title, alternative_titles",
      "actors",
      "genre",
      "year",
    ],
  })
  .then(() => {
    // done
  });

// Search for a first name
// index.search("Adam Sandler").then(({ hits }) => {
//   console.log(hits);
// });
