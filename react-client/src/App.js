import logo from './logo.svg';
import './App.css';
import MyComponent from "./components/MyComponent";
import ApolloAppProvider from "./ApolloProvider";
import PostsList from "./components/PostsList";
import ApolloAppProviderWebSocketLink from "./ApolloProviderWebSocketLink";
import PostSub from "./components/PostSub";
import ApolloProviderGraphqlWs from "./ApolloProviderGraphqlWs";
import MessageSubscription from "./components/MessageSubscription";

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
            <hr/>
            {/*<ApolloAppProviderWebSocketLink>
                <PostSub/>
            </ApolloAppProviderWebSocketLink>*/}

            <ApolloProviderGraphqlWs>
                <PostSub/>
            </ApolloProviderGraphqlWs>

            <hr/>
            <ApolloProviderGraphqlWs>
                <MessageSubscription/>
            </ApolloProviderGraphqlWs>

        </>
    )
}

export default App;
