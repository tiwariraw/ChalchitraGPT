# Chalchitra GPT

- npm create vite@latest
- configure tailwindcss (https://tailwindcss.com/docs/guides/vite)
- Header
- Routing of App
- Login form
- Sign up form
- Form validation (regex)
- useRef hook
- firebase setup
- deploying our app to production using firebase hosting
- create SignUp user account in firebase
- implement sign in user api
- after successful sign in / sign up, add the data returned to the redux store and navigate the user to browse page
- create redux store with userSlice
- onAuthStateChanged (https://firebase.google.com/docs/auth/web/manage-users)
- useNavigate hook (https://reactrouter.com/en/main/hooks/use-navigate)

# Features

- Home page (when you are not logged in)

- Login / Sign up page

  - Sign In / Sign up form
  - After successful login, redirect to Browse page

- Browse page (after authentication)

  - Header
  - Main Movie
    - Trailer in background
    - Title, descripton, play button
    - MovieSuggestions
      - MovieLists \* N (horizontally scrollable)

- ChalchitraGPT page
  - Search bar
  - Movie Suggestions

# Including custom fonts in TailwindCSS

- https://blog.logrocket.com/how-to-use-custom-fonts-tailwind-css/
- https://www.youtube.com/watch?v=SWfgvpw3Lng

# Explore

- React Hook Form / Formik library (form handling in React)

# Firebase

- Set up a new project in firebase
- select web and do the required setup
- set up authentication

# Firebase Hosting

- install firebase CLI (npm install -g firebase-tools)
- firebase login (command)
- firebase init (and choose the options whatever you want to do, in this case we are using firebase hosting)

  - Hosting: Configure files for Firebase hosting and (optionally) set up Github Action deploys
  - use an existing project (and select your project)
  - what do you want to use as your public directory?
    - build (use "build" folder)
  - Configure as a single-page app (rewrite all urls to /index.html)? No
  - Set up automatic builds and deploys with GitHub? No

  \*\* After this two files will be created: firebase.json and .firebaserc

  - npm run build
  - firebase deploy (command)
