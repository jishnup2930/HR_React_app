import React, { Fragment } from "react";
import './listgroup.css';

function ListGroup() {
  const items = [
    'Messi',
    'Cristiano',
    'Beckam',
    'Haaland'
  ];
const getMessage = ()=> {
  return items.length === 0 ? <p> No item found</p> : null ;;
}
return (
  <>
<h1>Employee</h1> 
{getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;