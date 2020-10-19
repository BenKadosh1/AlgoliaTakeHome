# Algolia Take-home Assignment: Ben Kadosh

**Instructions for downloading and running the app can be found at the bottom of the README.**

## Project Outline

### Background and Intent

After exploring different datasets (discussed below in more detail), I chose to build out a search platform for movies! I have been a movie lover from an early age and I couldn't pass up the opportunity to build out a product that is movie-themed. With that in mind, I wanted to harness Algolia's technology to build out a platform that would allow users to easily and effectively search for and discover movies with a fun UI and excellent search speed and relevance. Below, I walk through my approach to building MovieSearch in more detail.

### MovieSearch: A new way to Movie!

MovieSearch was built to help you find that action movie from your childhood that featured Tom Cruise that you just can't remember the name of or discover an obscure 1-star horror movie that Netflix's recommendation system just isn't going to find. MovieSearch is here for every movie search and discovery experience you can think of.

#### My Approach

1. Data Exploration: This began with looking through the different data sets that existed and narrowing them down based on interest. I was most intrigued by e-commerce and movies. I am a huge movie fan and I'm fascinated by ecommerce and how it has revolutionized our shopping experience. I examined both data sets to better understand which fields each was comprised of, any nuances in each dataset, and how standardized the data appeared to be. Ultimately, my love for movies won out.
2. Account Creation: I created my own account and started a 14-day free trial with Algolia. I then selected the US East datacenter, as it was the closest to me.
3. Quickstart Walkthrough: I was then directed to my dashboard and went through the quickstart assistant. I watched the following [intro video](https://www.youtube.com/watch?v=qSBm7d3McRI) and then followed the guide documents for [uploading data](https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/#overview).
4. Data Upload: I downloaded the records.json raw file from [github](https://raw.githubusercontent.com/algolia/datasets/master/movies/records.json). While trying to upload data, I noticed that the dashboard upload had a file size limit (50MB), which records.json exceeds (96MB). In order to upload all of the data, I wrote a Javascript script to parse the JSON file into 2 smaller files that could be uploaded through the dashboard. The [script](https://github.com/BenKadosh1/AlgoliaTakeHome/blob/main/recordsParser.js), along with the [original](https://github.com/BenKadosh1/AlgoliaTakeHome/blob/main/records.json) and [parsed](https://github.com/BenKadosh1/AlgoliaTakeHome/blob/main/recordsPart1.json) JSON files can also be found in the repository's main folder. The dataset has the following fields:
    - objectID
    - title
    - alternative_titles
    - year
    - image
    - color
    - score
    - rating
    - actors
    - actor_facets
    - genre

#### Product Design

5. Product Design: After brainstorming about what I wanted the user experience to be like, I settled on having a home page, two additional pages for user search and discovery, respectively, and an error page for any additional path users may try to search for. Because I wanted to offer two different variations of search, I decided to create and configure two indices: movies_discover and movies_search. With these different configurations, I was able to get a better sense for how different searchable attributes and their ordering, ranking criteria, and faceting options can affect the search and discovery experience. Even though my configurations were being applied to two different use cases, this process certainly gave me a better appreciation for the A/B testing feature Algolia offers to evaluate different configurations. 

#### Index Configuration

6. Configuration: My configurations have been made accessible to Algolia admins as instructed. Below I will discuss the reasoning for each configuration.
      - movies_discover: 
        - This index is meant to feed the discover page of the App. In the discovery space, users may not know what movie they want to watch, but they might have a sense for what genre and/or rating of movie they are in the mood for, and which actors they might want to see in that movie. And so, the configurations here are intended to help users filter down by genre and rating and search by the searchable attributes as well. The searchable attributes (all ordered) are as follows:
          1. genre
          2. rating
          3. actors
          4. year
          5. title
          6. alternative_titles
        - actor_facets, color, image, and score were all removed as searchable attributes. Images, links, and colors aren't really effective nor intuitive search criteria, and I though score is very similar to rating, rating was more standardized, which would make it easier for faceting. The ordering for discovery reflects my belief that the attributes that people will naturally use as filters are genre and rating, followed by actors, with year and title/alternative_titles being the least utilized. The titles are included because they may have words in the title relevant to discovery, but they are prioritized less because the intention is not to search based on titles, but rather to discover new movies based on the higher priority attributes. 
        - Ranking and sorting: The overview for the ranking and sorting configurations mentions that the default ranking rules work very well 99% of the time, so I kept them as is. It is highly recommended to configure at least one business/popularity metric as a custom rating, so I used the rating attribute, as I believe users will naturally want to see movies with higher ratings. 
        -  Attributes for faceting: For discovery, I used genre and rating as the attributes for faceting because these attributes will be the most effective in filtering movies for user discovery. 
      - movies_search:
        - This index is meant to feed the search page of the App. In the search space, users are looking to find which actors appeared in a certain movie, what year a movie came out, what rating the movie has, or what genres it falls under. The configurations here are intended to help users find a certain movie or information pertaining to a movie based on previously known information. The searchable attributes are as follows:
          1. title, alternative_titles
          2. actors
          3. genre
          4. year
        - actor_facets, color, and image were all removed as searchable attributes because images, links, and colors aren't really effective nor intuitive search criteria. Score and rating were removed so as not to affect searches for movies and/or years with numeric values. The ordering for search was chosen in this order because I believe the attributes that people will naturally search for first when thinking of a movie they already know is the title and actors, followed by genre and year. Title and alternative_title have the same priority here to accommodate searches in different languages.  
        - Ranking and sorting: The overview for the ranking and sorting configurations mentions that the default ranking rules work very well 99% of the time, so I kept them as is. It is highly recommended to configure at least one business/popularity metric as a custom rating, so I used the rating attribute, as I believe users will naturally want to see movies with higher ratings.
        -  Attributes for faceting: There is no faceting for the search page like there is for the discovery. 


#### Layout and Pages
7. Pages: The app was built using React. A list of dependencies are highlighted below, which were installed to enhance the app functionality and UI, in addition to Algolia's InstantSearch. The app consists of three main pages: Home, Discover, and Search. The user can navigate to these different pages using the Navbar component in the Discover and Search pages.
    - Home: The home page has an animation that shows several different movie related images fading in and out, as well as buttons to direct users to the discover and search pages. 
    - Discover: The Discover page has a navbar at the top with links to the home page on the top left and to the search and discover pages on the top right. In addition, it has a left and right panel (inspired by the live [demo](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react/)). In the left panel contains Refinement Lists for genre and rating and the right panel contains a search bar and cards for each search item returned. Each card is comprised of an image, title, genre, rating, and actors that appear in the movie. **Please note that a vast majority of the image urls provide by the dataset return "image not found" results. As a result, I improvised and took the search queries to retrieve images from unsplash, a site that provides freely usable images that may resemble the search query and ensure an image is in the card. **    
    - Search: Search is very similar to Discover in terms of layout. However, it does not offer Refinement lists and therefore only has a search bar and result cards. Additionally, as discussed above, search also has a different configuration that prioritizes different attributes. 

8. Desktop and Mobile: The App was designed to be responsive for both desktop and mobile use. Mobile testing and configurations are based on iPhoneX through Google Chrome's developer tools. Though I tried to account for a large majority of mobile devices, I acknowledge it is possible certain stylings were not addressed. 

#### Dependencies
9. Dependencies: The following dependencies were used in developing the app. They were installed using npm. 
    - Algolia's algoliasearch Javascript API client for configuring the indices
    - Algolia's InstantSearch for interacting with the API to send search requests and retrieve and present the relevant information through the use of InstantSearch Widgets 
    - React Router for client-side routing
    - react-responsive for media queries to structure the html differently for mobile and desktop
    - Ant design for icons and styling

#### Instructions
10. In order to run the app you will need to run the following commands locally:
    - git clone https://github.com/BenKadosh1/AlgoliaTakeHome.git
    - npm install 
    - npm start

#### References
The following Algolia docs/reference links were used for guidance in building out the app:
  - https://www.algolia.com/doc/guides/getting-started/quick-start/tutorials/quick-start-with-the-api-client/javascript/?language=javascript#search-ui
  - https://www.algolia.com/doc/api-client/getting-started/install/javascript/?language=javascript
  - https://www.algolia.com/doc/api-reference/api-parameters/searchableAttributes/#usage-notes
  - https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/?utm_medium=page_link&utm_source=dashboard#algolias-ranking-strategy
  - https://www.algolia.com/doc/guides/building-search-ui/installation/react/
  - https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react/
  - https://www.algolia.com/doc/api-reference/widgets/react/
  - https://www.algolia.com/doc/guides/building-search-ui/getting-started/react/
  - https://www.algolia.com/doc/guides/building-search-ui/widgets/showcase/react/
  - https://codesandbox.io/s/github/algolia/doc-code-samples/tree/master/React%20InstantSearch/getting-started?file=/public/index.html:429-527
  - https://www.algolia.com/doc/api-reference/widgets/refinement-list/react/
  - https://www.algolia.com/doc/guides/building-search-ui/widgets/customize-an-existing-widget/js/#via-cdn
  - https://www.udemy.com/course/the-web-developer-bootcamp/
  - https://www.udemy.com/course/modern-react-bootcamp/

## Feedback
  - I found the quickstart assistant to be extremely helpful
  - I was thoroughly impressed with all of the documentation and demos available, as well as the large amount of languages that Algolia can be used in
  - I liked that in the record upload option in the dashboard there was also the option for csv and tsv
  - Overall, this was a really rewarding experience for me to be able to build out a new app and really get to experience the power of Algolia
