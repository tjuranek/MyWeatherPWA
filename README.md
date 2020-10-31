# Weathery
[Weathery](https://weathery.tjuranek.com/) is a simple weather site built using React and [wttr.in's](http://wttr.in/) api.

### Project Features
- Current and forecasted weather data for any input city in the US.
- Locations saved to local storage through a custom hook.
- Current location weather.
- Mobile responsive design.

### Project Uses
- [Axios](https://github.com/axios/axios) (for an HTTP client)
- [Create-React-App](https://reactjs.org/docs/create-a-new-react-app.html) (for running and bundling React apps)
- [Emotion](https://emotion.sh/docs/introduction) (for styling components)
- [React-Router](https://reactrouter.com/) (for routing)
- [React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro) (for testing components)

### Project Goal
My first experience with React and production JavaScript was in early 2020 at work. With the help of great coworkers, within a couple months I learned to write components, fetch data, use Redux, and work with Material UI. It was fun, I was getting increasingly productive, but I felt like I had missed the basics. 

I began working on Weathery with the goal of keeping the code as bare bones as possible, rely on external libraries as little as possible, and learn as much as I could. 

### Challenges
- Historically, I have a terrible completion rate with personal projects and I knew I needed to do something differently if I wanted this one to be any different. I asked a good friend who is a much better developer than I am to hold me accountable to working on the project and do weekly code reviews. It was great and I'm extremely appreciative.

- Not working with a component library like Material UI was a big wake up call. I didn't realize how little I actually know about styling until this project started.

- Unlearning some things I've done at work was different too. In code, there's sometimes a lot of ways to do the same thing, and having an experienced mentor helped show me how some ways are definitely better than others.

### What I Learned
- Making properly reusable components is super important. I'm used to fetching data when and wherever needed, not handling any loading or error displays, and have terrible state management practices. I learned a lot about how to avoid these things in the project. It's not perfect, but I'm happy with how I split up components into basic components and containers, and then fetch the data at the highest level possible.

- Custom hooks are awesome. I built two, one for interacting with local storage and one for fetching data. I learned a lot about React's useEffect hook and when a component does and doesn't re-render.

- This was my first real project without using Bootstrap or some form of a grid system. It didn't amount to much, but I learned a lot about flexbox by not doing so.

- This was my first time ever doing component tests, or really any JavaScript testing. Took me a long time to get the hang of it, but I really like it and am planning on bringing that into future projects.

- Focusing on the UI design too early wastes a lot of time, I regret it, and I need to learn how to use Figma or Adobe XD.

- Github Actions are awesome. I can't wait to use these more.
