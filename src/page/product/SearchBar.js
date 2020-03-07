import React, {Fragment} from 'react';

export const SearchBar = (props) => {
  return (
    <Fragment>
      <input placeholder="Search..."></input><br />
      <input type="checkbox" ></input>Only show products in stock
    </Fragment>
  )
}