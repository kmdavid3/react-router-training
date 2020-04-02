import React from 'react';
import { HomePage } from '../pages/home';
import { ContactPage } from '../pages/contacts';
import { NotFound } from '../pages/404';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { UsersPage } from '../pages/users';


export const users = [
  {
    id:"kfkfk",
    firstName: "david",
    lastName: "kayembe",
    birth:1996,
    city: 'kinshasa',
    status:'single',
    accounts:
      [
        {
          id:'1',
          label: 'mpesa',
          numero: 324589,
          amount:2500000,
        },
        {
          id:'2',
          label:'orange',
          numero: 85554,
          amount:785410,
        },
    ]
  },
  {
    id:"kljsdf",
    firstName: "ruben",
    lastName: "tobit",
    birth:1996,
    city: 'lubumbashi',
    status:'maried',
    accounts:
      [
        {
          id:'3',
          label: 'm-pesa',
          numero: 241589,
          amount:0,
        },
        {
          id:'4',
          label:'orange',
          numero: 859674,
          amount:1000000,
        },
    ]
  },
  {
    id:"kfkfk4dfs",
    firstName: "francis",
    lastName: "nkuadi",
    birth:1986,
    city: 'kinshasa',
    status:'maried',
    accounts:
      [
        {
          id:'5',
          label:'africell',
          numero: 2345,
          amount:4785693300,
        },
        {
          id:'6',
          label: 'airtel',
          numero: 85745236,
          amount:7500452,
        },
    ]
  },
  {
    id:"kljsdffdfdfdfd",
    firstName: "vicku",
    lastName: "abeli",
    birth:2006,
    city: 'goma',
    status:'single',
    accounts: 
      [
        {
          id:'7',
          label:'vodacom',
          numero: 554,
          amount:78548,
        },
        {
          id:'8',
          label: 'airtel',
          numero: 958682,
          amount:600000,
        },
    ]
  },
]

const PublicLayout = (props) => {
  console.log("these are props : ",props);
  return (
  <>
  <BrowserRouter>
    <header>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/users">User</Link>
      </ul>
    </header>
      <div>
        <Switch>
          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/contact" render={() => <ContactPage />} />
          <Route path="/users" component={(props) => <UsersPage {...props} users={users}/>} />
          <Route render={() => <NotFound />} />
        </Switch>
      </div>
    </BrowserRouter>
  </>
)};

export { PublicLayout };
