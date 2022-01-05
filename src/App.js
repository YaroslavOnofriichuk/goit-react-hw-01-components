import React from 'react';
import styled from '@emotion/styled';
import Profile from './components/SocialProfile/SocialProfile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

const { username, tag, location, avatar, stats } = user;

const Main = styled.main`
    color: gray;

    ul {
        padding-left: 0px;
    }

    li {
        list-style: none;
    }
`;

const App = () => (
    <Main>
        <Profile
            username={username}
            tag={tag}
            location={location}
            avatar={avatar}
            stats={stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </Main>
);

export default App;
