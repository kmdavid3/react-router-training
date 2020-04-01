import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { Account } from './account';

const UserDetailsPage = ({ match, firstName, lastName, birth, city, accounts }) => {
  return (
  <div>
    <h1>Name : {`${firstName} - ${lastName}`}</h1>
    <h1>Birth : {birth}</h1>
    <h1>City : {city}</h1>
    <div>
      <ul>
        {
          accounts.map(({ id, label }, index) => {
            return <li key={id}><Link to={`${match.url}/account/${id}`}>{label}</Link></li>
          })
        }
      </ul>
    </div>
      <Route
        path={`${match.url}/account/:accountId`}
        render={(props) => {
          console.log(props)
          const account = accounts.find(({ id}) => id === props.match.params.accountId);
          if (account) {
            return <Account {...props} {...account} />
          }
          return <Redirect to='/404' />
        }}
      />
  </div>
)};

export { UserDetailsPage };
