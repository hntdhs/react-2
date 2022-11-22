### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
To handle the requesting and sending of pages via the browser as opposed to the browser, thus making a single page application

- What is a single page application?
A site that uses exclusively client side routing (i.e. using the browser in place of a server)

- What are some differences between client side and server side routing?
With client side routing there isn't a continuous series of requests to the server as a user looks through a site, the information all goes into the browser when it's initially loaded. Server-side involves a heavier load on the server than client-side.

- What are two ways of handling redirects with React Router? When would you use each?
Using the Redirect component ("you shouldn't have gotten here, go here instead"), and calling .push method on the history object ("you finished this, now go here")

- What are two different ways to handle page-not-found user experiences using React Router? 
Redirect component and <Route><NotFound /></Route> after routes using "exact."

- How do you grab URL parameters from within a component using React Router?
With the useParams hook

- What is context in React? When would you use it?
A way of making data accessible across all components. You might use it to avoid repetition or when something deep down in the code needs access to something created high above that isn't needed by anything in between.

- Describe some differences between class-based components and function
  components in React.
  A functional component is just a JS function that returns JSX, while class components are classes that might contain multiple functions that contribute to the way an app works.

- What are some of the problems that hooks were designed to solve?
They let you use state and other React features without the need to write a class. There's no need to convert a function component to a class component if it turns out that state needs to be added to it.