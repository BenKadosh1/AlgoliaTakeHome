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

Link 1
Link 2
Link 3 

Regards,
Ben


## Response 2
## Response 3
