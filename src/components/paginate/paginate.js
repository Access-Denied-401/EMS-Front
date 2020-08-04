import React from 'react';
// import { Link } from 'react-router-dom';

function Paginate(props) {
  const pageNumbers = [];  
  
  for (
    let i = 1;
    i <= Math.ceil(props.users.length / props.itemsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
  
    <nav>
      <ul>
        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <a href onClick = {() => { props.setCurrentPage(number);}}>{number}</a>
            </li>
          );
        })}
      </ul>
    </nav>

  );
}

export default Paginate;
