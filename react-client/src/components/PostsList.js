import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_USERS = gql`
    query getAllPosts {
        allPosts {
            author
        }
    }
`;

const PostsList = () => {
    const { loading, error, data } = useQuery(GET_USERS);

    if (loading) return <p>Loading...</p>;
    if (error) {
        console.log(error);
        return <p>Error :(</p>;
    }

    return (
        <ul>
            {data.allPosts.map((post) => (
                <li key={post.id}>
                    {post.author}
                </li>
            ))}
        </ul>
    );
};

export default PostsList;
