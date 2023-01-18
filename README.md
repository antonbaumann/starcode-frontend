[![Netlify Status](https://api.netlify.com/api/v1/badges/f0ddcd71-13ef-4579-ac15-5d8ee6d21c7c/deploy-status)](https://app.netlify.com/sites/kaleidoscopic-cranachan-61252f/deploys)


# Starcode Frontend

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts
To install the dependencies, run `yarn install`.\
To start the development server, run `yarn dev`.\
Before pushing to the repository, run `yarn lint` to check for linting errors.\
To fix linting errors, run `yarn fix`.

### Environment Variables
To run this project, you will need to add the following environment variables to your `.env` or `.env.development.local` file
- `REACT_APP_BACKEND_URL` - The URL of the backend API

### Node Version
This project uses Node version `v16.15.0`. But I guess it should work with most other versions as well.

### Deployment
This project is deployed on [Netlify](https://www.netlify.com/). The deployment is triggered automatically when a commit is pushed to the `main` branch.

## Structure
The project is structured as follows:
- `src` - Contains the source code of the project
  - `assets` - Contains the static assets
  - `components` - Contains the React components
  - `data` - Contains the content used by the application which is *not* fetched from the backend
  - `util` - Contains the utility functions
  - `strapi` - Contains the Strapi API client which 
  - `views` - Contains the pages of the application
  is used to fetch data from the backend
  - `App.tsx` - The main component of the application
  - `index.tsx` - The entry point of the application

The project uses [React Router](https://reactrouter.com/) for routing (toggling bewtween the different views of the application).

### Components
For each component there exist two files:
- `ComponentName.tsx` - The component itself
- `ComponentName.scss` - The SCSS module for the component (if the component has styles)

The components are implemented using [functional components](https://reactjs.org/docs/components-and-props.html) and [React Hooks](https://reactjs.org/docs/hooks-intro.html).
```tsx
import React from 'react';
import './ComponentName.scss';

type ComponentNameProps = {
  // The props of the component
}

const ComponentName = (props: ComponentNameProps) => {
  const [state, setState] = useState() 
  return (
    <div className="component-name">
      ...
    </div>
  )
}
```

## Resources
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html)
- [GraphQL](https://graphql.org/learn/)
