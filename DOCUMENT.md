# Documentation

Total working hours elapsed are 14 Hours:

# Open API choice

While planning, I preferred the alternative approach to pick an open API from the given list. I chose **IMDB open API**.

## Why I preferred IMDB
- Quick setup with API key
- Easy documentation
- JSON format (Its easy to understand and trending)

## App Setup
- **Vue JS** installation (basic)
- **Dockerfile** and **docker-compose** setup for local development.
  > Reason for choosing docker is to avoid machine to machine issues regarding dependencies as 		      well as permission of various files.

## Plugins installation
- **VUE Router**
	 > VUE Router is easy to setup plugin to manage web routes in order to navigate to various components.
 - **VUEX**
	 > VUEX is a plugin to manage global state of data store and its access management to various components.
- **Axios**
	> Axios is easy to use HTTP client to manage HTTP requests
- **VUE 3 loading overlay**
	> A pre setup loading overlay that can be enabled on intercepting API calls as well as on async processes.
- **Tailwind CSS**
	> An easy to setup light weight CSS framework that can be customised.

## Development phases
- Routes setup using **VUE Router**.
- Making of web app frontend components.
- Styling of web app using **Tailwind CSS**.
- Configuration of **VUEX** data store components.
- Implementation of **Axios** to consume API calls.

## Web App features
- **Main page**
	> Main page fetches and lists upcoming movies.
- **Search movies**
	> A feature to search movies by **keyword**
- **Movie detail page**
	> A feature to display movie details.	
