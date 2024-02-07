import React from 'react';
import { gql, useSubscription } from '@apollo/client';

const NEW_POST_SUBSCRIPTION = gql`
    subscription onNewPost {
        postCreated {
            author
        }
    }
`;

const PostsSub = () => {
    const { loading, error, data } = useSubscription(NEW_POST_SUBSCRIPTION);

    if (loading) return <p>Loading...</p>;
    if (error) {
        console.log(error);
        return <p>Error :(</p>;
    }

    return (
        <div>
            <h3>New Post</h3>
            <p>Title: {data.author}</p>
        </div>
    );
};

export default PostsSub;
