# MovieFind

## An app which helps with the choice of a movie.

This app is made for the SoftUni ReactJS March 2021 final exam

### It lets the user:

- Get a list of different movie categories

  - Popular
  - Top Rated
  - Upcoming

- Choose a category to view a list of movies inside it
  - list updates with an infinite scroll
- Check movie details
- Sign up/Login
- View profile page
- Create a collection of movies
- Add movie to collection

### Back-End

- Cloud Functions are used to expose an express API
- Firestore is used to store user/collections data
- The Firebase Client SDK is used on the back-end to authenticate users and send a JWT to the front-end
- Movie data is fetched from [TMDB API](https://www.themoviedb.org/)

### Front-End

- React is used to build the UI
- Client routes are separated into two different (authenticated/unauthenticated) sections
- Context API is used to update the user information and provide it to components
- Youtube API is used to fetch movie trailers
- React Bootstrap is used for styling
- Styled Components is used to encapsulate styles for components

### Difficulties and problems

In deciding on which technology I should utilize for the back-end, I opted for using Firebase because it conveniently had all the functionality I needed for the project. Counter-intuitively an easier solution for me personally would have been using NodeJS, Express and MongoDB exclusively because my experience with Firebase was more limited. I ended up building somewhat custom back-end logic despite using Firebase because I wished to utilize cloud functions.

Part of my motivation behind all of this was to also gain some experience with Firebase and it's products. I also plan on adding more features, most importantly - notifications which will let users to suggest movies to one another.

At the moment the app is not as complete as I hoped it would be at this point, but I've tried my best to complete most of the required functionality.
After I deployed it to Firebase Hosting I had some problems with requests to the back-end which affected how the authentication and some of the other functionality behave.

[**Check deployed app here**](https://movie-find-dev.web.app/)
