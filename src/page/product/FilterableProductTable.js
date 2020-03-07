import React, {Component} from 'react';
import {SearchBar} from "./SearchBar";
import {ProductTable} from "./ProductTable";

//Mockup data


const FilterableProductTable = () => {
  return (
    <div>
      <SearchBar/>
      <ProductTable ></ProductTable>
    </div>
  )
}

export default FilterableProductTable;