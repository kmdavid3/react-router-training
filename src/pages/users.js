import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { UserDetailsPage } from './user-details';

const UsersPage = ({ users, match: { url }}) => (
  <div>
    <ol>
    {
      users.map((user, index) => {
        return (<li key={index}>
          <Link to={`${url}/${user.id}`}>name : {`${user.firstName} - ${user.lastName}`}</Link>
        </li>)
      })
    }
    </ol>
    <Route path={`${url}/:userId`}
      render={(props) => {
        const user = users.find(({ id }) => id === props.match.params.userId);
        if(!user) {
          return <Redirect to="/404" />
        }
        return <UserDetailsPage {...props} {...user} />
      }}/>
  </div>
);

export { UsersPage };
