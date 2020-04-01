import React from 'react';

const Account = ({ label, numero, amount }) => (
  <div>
    <h2>Votre compte : {label} - {numero}</h2>
    <p>dispose de : {amount}</p>
  </div>
);

export { Account };
