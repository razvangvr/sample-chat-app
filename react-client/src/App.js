import logo from './logo.svg';
import './App.css';
import MyComponent from "./components/MyComponent";
import ApolloAppProvider from "./ApolloProvider";
import PostsList from "./components/PostsList";
import ApolloAppProviderWebSocketLink from "./ApolloProviderWebSocketLink";
import PostSub from "./components/PostSub";
import ApolloProviderGraphqlWs from "./ApolloProviderGraphqlWs";
import MessageSubscription from "./components/MessageSubscription";
import MainChatComponent from "./components/MainChatComponent";
import Users from "./components/usersConst";

import React, { useState } from 'react';

/*
In your root App.js file, wrap your React application with the ApolloAppProvider component:
* */

const App = () => {

    const [selectedUser, setSelectedUser] = useState(null);

    const handleUserSelection = (value) => {
        setSelectedUser(value);
    };

    let displayElement;
    if (selectedUser === Users.ROBI) {
        displayElement = <MainChatComponent user={Users.ROBI}/>;
    } else if(selectedUser === Users.STEFI){
        displayElement = <MainChatComponent user={Users.STEFI}/>;
    } else {
        displayElement = <span>Please Select a User</span>;
    }

    return (
        <>
            <div>
                {displayElement}
            </div>
            {(selectedUser==null) ?
                (<div>
                <label>
                    <input
                        type="radio"
                        name="toggle"
                        value={Users.ROBI}
                        checked={setSelectedUser === Users.ROBI}
                        onChange={() => handleUserSelection(Users.ROBI)}
                    />
                    {Users.ROBI}
                </label>
                <label>
                    <input
                        type="radio"
                        name="toggle"
                        value={Users.STEFI}
                        checked={setSelectedUser === Users.STEFI}
                        onChange={() => handleUserSelection(Users.STEFI)}
                    />
                    {Users.STEFI}
                </label>
            </div>
                ) : (<div></div>)}
            <hr/>
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
