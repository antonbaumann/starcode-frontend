import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import HttpsRedirect from './components/HttpsRedirect'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const client = new ApolloClient({
  uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
  cache: new InMemoryCache(),
})

root.render(
  <React.StrictMode>
    <HttpsRedirect disabled={process.env.NODE_ENV === 'development'}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </HttpsRedirect>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
