# Algolia Take-home Assignment: Ben Kadosh

## Project Outline

### Background and Intent

After exploring different datasets(discussed below in more detail), I choose to build out a search platform for movies! I have been a lover of movies from an early age and I couldn't pass up the opportunity to build out a product that is movie themed. With that in mind, I wanted to harness Algolia's technology to build out a platform that would allow users to more easily and effectively search for and discover movies with a fun UI and excellent speed and relevance. Below I walk through my approach to building MovieSearch in great detail.

### MovieSearch: A new way to Movie!

MovieSearch was built to help you find that action movie from your childhood that featured Tom Cruise that you just can't remember the name of and to help you discover an obscure 1-rated horror movie that Netflix's recommendation system just isn't going to find for you, and for every other movie search and discovery experience you can think of.

#### My Approach

1. Data Exploration: This begin with looking through the different data sets that existed and narrowing them down first based on interest. I was most intrigued by e-commerce and movies. I am a huge fan of movies and fascinated by ecommerce and how it has revolutionized our shopping experience, so I wanted to take a more in depth look at both. I examined both data sets to better understand what fields each was comrpised of, any nunaces to the data in each dataset, and how standardized the data appeared to be. Ultimately, my love for movies won out.
2. Account Creation: I created my own account and started a 14-day free trial with Algolia. I then selected the US East datacenter as it was the closest.
3. Quickstart Walkthrough: I was then directed to my dashboard and went through the quickstart assistant. I watched the following intro video https://www.youtube.com/watch?v=qSBm7d3McRI and then followed the guide documents for uploading data https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/#overview.
4. Data Upload: I downloaded the records.json raw file from github https://raw.githubusercontent.com/algolia/datasets/master/movies/records.json. I noticed that through the dashboard upload there is a limit on file size (50MB), which records.json exceeds(96MB). In order to upload all of the data, I wrote a Javascript script to parse the JSON file into 2 smaller files that could be uploaded through the dashboard. The script and orginial and parsed data files can be found HERE - INSERT LINK.

#### Product Design

5. Product Design: I then proceeded to brainstorm what I wanted to display to users and in what fashion. I then designed a highlevel outline of what I would display. I settled on having a home page, two additional pages for user search and discovery respectively, and an error page for any additional path users may try to search for. Because I wanted to offer two different variations of search, in addition to wanting to test out different search configurations through searchable attributes and their ordering, different rankings, and faceting, and getting a better sense for how A/B testing can be useful within the realm of search, I decided to create two indices - movies_discover and movies_search (a replica) and configure each accordingly.

#### Index Configuration

6. Configuration: My configurations have been made accessible to Algolia admin's as instructed. Below I will discuss the reasoning for each configuration.
  - movies_discover
This index is meant to feed the discover page of the App. In the discovery space users don't know what movie they want to watch, but they might have a sense for what genre and/or rating of movie they are in the mood for, and which actors they might want to see in that movie, and so discover is meant to help users find movies they didn't even know they wanted to watch! And so, the configurations here are intended to help users filter down by genre and rating and search by the searchable attributes as well. The searchable attributes (all ordered) are as follows:
1. genre
2. rating
3. actors
4. years
5. title
6. alternative_titles
actor_factets, color, image, score were all removed as searchable attributes because images, links, and colors aren't really effective nor intuitive search critera and I believe score is very similar to rating and rating was more standardized, which would make it easier for faceting. 
  The ordering 
  
  - movies_search

#### Layout and Pages and Mobile/responsiveness

#### Dependencies

React router
react responsive for media queries
ant design
algolia instant search

#### References

Colt Steele
Algolia documentation links
Algolia ecommerce example

## Feedback and Observations

quickstart assistant was very helpful so I decided to go along with it
when uploading data if file exceeds max make it red or provide a message to users

My approach

5. Relevance configuration
   This data set has 10 searchableAttributes
   This excludes objectId provided by Algolia

   They are:
   objectID
   title
   alternative_titles
   year
   image
   color
   score
   rating
   actors
   actor_facets
   genre

   Of these I would argue the following should be searchable as they are relevant attributes that it is likely users will know
   and use for searching:
   title
   alternative_titles
   year
   score
   rating
   actors
   genre

   These are the ones that wouldn't be used IMO
   objectID
   image
   color
   actor_facets

   in order to properly configure searchable attributes I realized I would need to install the JavaScript API Client
   with that I knew I wanted to use react for the front end so, I used the following

   npx create-react-app my-app
   https://reactjs.org/docs/create-a-new-react-app.html

   then
   npm install algoliasearch

   in order to install api I went through quickstart exercises to make it work and become more familiar
   https://www.algolia.com/doc/guides/getting-started/quick-start/tutorials/quick-start-with-the-api-client/javascript/?language=javascript#search-ui

   look at admin copy and then admin

   discuss which go where

6. ranking and sorting
   kept default as it says 99%
   and will need to add one custom ranking attribute.

7. Install npm algolia search react component
   some issues here with npm rollback but if I let it sit long enough it eventually installed
8. Use react router
   npm install --save react-router-dom

9. check npm install dependencies if i missed anything with algolia installations

10. First step is to create the routes we want
    later we will add 404

routes we want are
/
/Search
/Discover

Home page will have images that fade in and out in the background of different movies
and two options for search and discover

## using ant design for buttons

for styling
https://www.algolia.com/doc/guides/building-search-ui/widgets/customize-an-existing-widget/js/#via-cdn
https://codesandbox.io/s/github/algolia/doc-code-samples/tree/master/React%20InstantSearch/getting-started?file=/public/index.html:429-527

refinement list for search
https://www.algolia.com/doc/api-reference/widgets/refinement-list/react/

-

Observations

I liked that in the record upload option there was also the option for csv and tsv
Quickstart assistant was super ease to work with

when trying to upload a file larger than 50MB nothing would happen. Perhaps it should highlight red or provide a message to users to use smaller files

notes
if movie doesn't have image go based off of genre
if no genre default
test return status make axios request perhaps use postman

will need to use react router for multiple pages
have design layed out
