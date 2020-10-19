## Response 1
Hi George, 

I hope all is well. At a high-level, I would view records and indexing as follows:
  1. Record 
      - An object that holds all of the relevant information (known as fields/attributes/elements) for an item (known as a record) such as an event, transaction, or entity. It is conceptually very similar to an entry in a database or a row of data in an excel spreadsheet. You can also think of it as an item that holds a set of key-value pairs all pertaining to a given object. Here is a simple example: 
        - Suppose there is an online shoe store that is registering new users. For each user, we want to get their first and last name, shoe size, and credit card and shipping information. 
        - One record would store the following information for a specific user:
          - First Name: Ben
          - Last Name: Kadosh
          - Shoe Size: 9.5
          - Credit Card: 1234 1234 1234 1234
          - Address: 10 5th Ave
          - City: New York
          - State: NY

  2. Indexing
      - An index is where data is stored for use by a search engine. It is conceptually similar to a table in a database. Indexing is the process by which a search engine organizes the stored data to retrieve the most relevant information as quickly as possible. Without indexing, a search engine has no direction, and it would have to potentially go through all of the data in an index to find the relevant information. Without having to look under the hood, the process of indexing is like creating a map that allows a search engine to know exactly where to look for relevant information instead of searching through all of the data until it finds what it needs.
    
Regarding the "Custom Ranking" metrics, I think it is important to think of these metrics as the ones that customers/consumers will look for to influence their decisions and facilitate tie breaks when purchasing a product or taking on an activity. To give you an example, suppose we want to buy a pair of sneakers from Adidas' online store. We filter by shoe size, type of shoe, and color, and 10 results appear. How will we determine which to purchase beyond the native order in which they appear?

We might look for the **average rating** for each shoe and select the highest rated shoe. We might balance the average rating with which shoe has the highest **number of ratings**, because we believe we can trust an average score comprised of 10,000 ratings more than a high average score comprised of 50 ratings. 

If instead we wanted to buy a computer, for example, there is a good chance we will be more interested in the newer computers, so we will want to know the **release/construction date**. We might also want to know not just which product has the highest rating or when it was released, but also **how many views it has**. Views can indicate what has caught the attention of others and what might be currently trending. 

I hope I was able to answer all of your questions, but if you have any follow-up questions please feel free to reach out. In addition, I have included a few links to the Algolia website where they discuss these concepts in more detail. 

[Link 1](https://www.algolia.com/doc/api-client/methods/indexing/)   
[Link 2](https://www.algolia.com/doc/faq/basics/what-is-an-index/)   
[Link 3](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/)   

Regards,   
Ben


## Response 2
Hi Matt,  

I hope all is well. Please don't apologize - I appreciate the honesty and feedback. I will be sure to pass it along to the product team.  

I know the new dashboard design is different, however it might be possible we can find a solution that reduces the number of clicks you have to go through for clearing and deleting indexes. While the dashboard certainly has its benefits, I think the API Client could really simplify some of your tasks here. The API Client has two methods, **.delete()** and **.clearObjects()**, which can take care of clearing and deleting indexes for you with a handful of lines of code. It might require a bit more time up front, but the code will be reusable and easily configured and can save you time in the long run. 

I have included several links to Algolia's website where they discuss these concepts in more detail for your reference. I know the thought of having to use the API may be daunting, but it is actually quite simple and I'd be happy to help you out. If you prefer to stick with the dashboard, I'd also be happy to set up a video call for us to go through everything and see if there is a more efficient way to do what you want within the platform. Please let me know whatever you prefer. 

[Link 1](https://www.algolia.com/doc/api-reference/api-methods/clear-objects/)      
[Link 2](https://www.algolia.com/doc/api-reference/api-methods/delete-index/)    
[Link 3](https://www.algolia.com/doc/api-client/getting-started/install/javascript/?language=javascript)     

Thanks!   
Ben

## Response 3
Hi Leo, 

Thanks for reaching out. Algolia has done a lot of great work to ensure that the development work for you is simple, quick, and efficient. 

Algolia offers a great deal of flexibility for its users through the dashboard and an API Client. It can be used with more than 10 different coding languages, including JavaScript, Python, Ruby, PHP, and Scala. Furthermore, there is a large offering of UI Widgets that can be used with React, Vue, Angular, iOS and Android. 

The high level process would look like this:
  1. Create an Algolia account
  2. Select a datacenter
  3. Create an [index](https://www.algolia.com/doc/api-client/methods/indexing/) 
  4. Upload the desired data
  5. Configure the index with the relevant searchable attributes, ranking, and faceting 
  6. Build out a website UI
  7. Connect the UI to the index through the API client
  
I have provided a link to the "[Getting Started](https://www.algolia.com/doc/guides/getting-started/quick-start/)" page for your reference, which has more information on the process from start to finish. From there, the sky is the limit. We offer A/B testing, analytics, and personalization, which can greatly enhance search effectiveness and the search experience. 

I would direct you to the following [video](https://www.youtube.com/watch?v=IYY5RM1sBC0) and [interactive tutorial](https://www.algolia.com/doc/onboarding/#/pick-dataset) to see what can be done in a short period of time. I can also tell you that in a matter of days, I was able to go from knowing little about how to use the product to building a full Movie Search application. With that being said, the product has been designed to minimize the amount of development work you will need to do. 

If you have any further questions or would be interested in a demo of the latest and greatest that the team has created, please let me know. Thanks again for reaching out!

All the best,    
Ben
