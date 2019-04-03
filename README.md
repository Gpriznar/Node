# Node
Projects designed to practice and expand upon backend programming knowledge.

**Todo:** My first forray into backend development. This website is a simple application designed to test my connection with a local server and ability to retrive and display jsons. 

**Trip App** This project takes user input and displays it in a list format. (You will need to copy an image address in order to successfully load the image field) Each submission is able to be deleted by utilizing a GUID key. 

  -Updates to Trip App: Added ability to have unique user registration and login. Users trips will are now saved relative to their login information and will be called on the Add Trip page.

**Movies** This movie application focused on using routers to connect various pages together on a local server in order to simplify code and allow for additional manipluation. The user can add movies, navigate to a different page using a "partial" menu and then view information about their movies or delete from the list. This app took advantage of the uuid package rather than manually creating a key via a function. Furture updates would include the ability to sort by genre.

**Blog** This application allows the user to post a blog, view all of their blogs in addition to editing and deleting previous posts. This was built using a local database via postgre and mustache. Updated to include a registration/login page which saves user info to the database. Passwords are not encrypted at this time.

**Blog2** This application is a recreation of the original Blog project but utilizing sequelize instead of pgp. The user can add blog titles, content, and category. After submitting their blog post the user can either delete their entry or update it (update not fully functional). Further updates will address the issue with users updating their posts and then eventually allow the user to sort by category. 
