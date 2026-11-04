Q1. Explain the difference between frontend, backend, and full-stack development with suitable real-world examples.
ans:- 
1. Frontend Development:- Frontend is the part of a website or app that users see and use. It includes buttons, images, menus, and web pages.

Example: On Amazon, the product page, search bar, and "Add to Cart" button are part of the frontend.

2. Backend Development:- Backend is the part that works behind the scenes. It stores data, processes requests, and connects to the database.

Example: When you place an order on Amazon, the backend checks payment, updates stock, and saves your order.

3. Full-Stack Development:- A full-stack developer works on both frontend and backend.

Example: A full-stack developer can create the shopping page, connect it to the database, and make the order system work.



Q2. Create a simple diagram showing how the client-server model works in web architecture.
ans:-
          Client (User)
     (Browser / Mobile App)
              |
     1. Sends Request
    (Open a Website)
              |
        Web Server (Server)
   (Processes the Request)
              |
     2. Accesses Database
              |
          Database
     (Stores Website Data)
              |
     3. Returns Data
              |
        Web Server (Server)
              |
     4. Sends Response
   (Web Page / Data / Images)
              |
          Client (User)
     (Displays the Web Page)



Q3. Describe how a browser requests and displays a web page from a web server.
ans:- 
1. The user enters a website address (URL) in the browser.
2. The browser sends a request to the web server.
3. The web server receives the request and processes it.
4. If needed, the server retrieves data from the database.
5. The server sends the requested web page (HTML, CSS, JavaScript, images) back to the browser.
6. The browser reads the files and displays the web page on the user's screen.



Q4. Identify and list the tools required to set up a web development environment. Explain the purpose of each.
ans:- 
1. Code Editor (VS Code)
Purpose: Used to write and edit HTML, CSS, JavaScript, and other programming code.

2. Web Browser (Chrome, Firefox, Edge)
Purpose: Used to view and test web pages.

3. Web Browser Developer Tools
Purpose: Used to inspect HTML/CSS, debug JavaScript, and test websites.

4. Local Server (XAMPP, WAMP, or Live Server)
Purpose: Runs websites on your computer for testing before publishing them online.

5. Version Control (Git)
Purpose: Tracks code changes and helps manage different versions of a project.

6. GitHub
Purpose: Stores code online, allows collaboration, and provides backup.



Q5. Explain what a web server is and give examples of commonly used servers.
ans:-
A web server is software or a computer that stores website files and delivers them to users' browsers when they request a web page over the internet.

--Commonly Used Web Servers
1. Apache HTTP Server – One of the most popular open-source web servers.
2. Nginx – Known for its high performance and fast speed.
3. Microsoft IIS (Internet Information Services) – A web server developed by Microsoft for Windows.
4. LiteSpeed – A high-performance web server often used for hosting websites.

exp-A web server stores website files and sends them to users when they request a website.



Q6. Define the roles of a frontend developer, backend developer, and database administrator in a project.
ans:-
1. Frontend Developer
Creates the part of the website that users see and interact with.
Designs web pages using HTML, CSS, and JavaScript.
Makes the website attractive and user-friendly.

2. Backend Developer
Develops the server-side of the website.
Handles business logic, user authentication, and APIs.
Connects the website to the database using languages like Java, Python, or PHP.

3. Database Administrator (DBA)
Manages and maintains the database.
Stores, updates, and secures data.
Ensures data is backed up and available when needed.



Q7. Install VS Code and configure it for HTML, CSS, and JavaScript development. Take a screenshot of the setup.
ans:-
Steps
1. Download and install Visual Studio Code (VS Code) from the official website.
2. Open VS Code.
3. Install the Live Server extension:
---Click the Extensions icon (Ctrl + Shift + X).
---Search for Live Server.
---Click Install.
4. Create a new folder (e.g., WebProject) and open it in VS Code.
5. Create three files:
---index.html
---style.css
---script.js
6. Link the CSS and JavaScript files in index.html.
7. Right-click index.html and select Open with Live Server to view the webpage in your browser.



Q8. Explain the difference between static and dynamic websites. Provide an example of each.
ans:-
Static Website
--A static website displays the same content to every user.
--It is built using HTML and CSS.
--Content changes only when the developer edits the files.

Example: A personal portfolio website or a college information website.

Dynamic Website
--A dynamic website displays different content based on the user or data.
--It uses HTML, CSS, JavaScript, and backend languages like PHP, Java, or Python with a database.
--Content is updated automatically.

Example: Amazon, Facebook, Instagram, or an online banking website.



Q9. Research and list five web browsers. Explain how rendering engines differ between them.
ans:-
1. Google Chrome
Rendering Engine: Blink
Explanation: Blink is fast and supports modern web technologies.

2. Mozilla Firefox
Rendering Engine: Gecko
Explanation: Gecko is an open-source engine known for good standards support and privacy.

3. Microsoft Edge
Rendering Engine: Blink
Explanation: The latest Edge uses Blink, making it compatible with most websites.

4. Safari
Rendering Engine: WebKit
Explanation: WebKit is optimized for Apple devices and provides good performance.

5. Opera
Rendering Engine: Blink
Explanation: Opera also uses Blink and supports modern web features.



Q10. Draw a labeled diagram showing the basic web architecture flow — client, server, database, and APIs.
ans:- 
              Client (Browser)
                     |
          HTTP Request (URL)
                     |
              Web Server
                     |
          Calls API / Business Logic
                     |
                  API Layer
                     |
          Fetches / Updates Data
                     |
                 Database
                     |
             Returns Data
                     |
                  API Layer
                     |
             Sends Response
                     |
               Web Server
                     |
          HTTP Response (HTML, CSS,
         JavaScript, JSON, Images)
                     |
              Client (Browser)