import logo from './logo.svg';
import './App.css';
import MyComponent from "./components/MyComponent";
import ApolloAppProvider from "./ApolloProvider";
import PostsList from "./components/PostsList";

/*
In your root App.js file, wrap your React application with the ApolloAppProvider component:
* */

const App = () => {
    return (
        <>
            <MyComponent/>
            <ApolloAppProvider>
                <PostsList/>
            </ApolloAppProvider>
        </>
    )
}

export default App;
