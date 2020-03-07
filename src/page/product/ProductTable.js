import React from 'react';
import {ProductCategoryRow} from "./ProductCategoryRow";
import {ProductRow} from "./ProductRow";
import _ from 'lodash';

export const ProductTable = (props) => {
 const category = _.groupBy(props.products, 'category');
 console.log(category);
 const categoryList =[];

 for(let key in category){
   categoryList.push(<ProductCategoryRow category={key} key={key}/>);
   category[key].forEach(item =>{
     categoryList.push(<ProductRow price={item.price} name={item.name} stocked={item.stocked} key={item.name}/>);
   })
 }

    return (
    <>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>

        {/*<ProductCategoryRow/>
        <ProductRow/>
        <ProductRow/>
        <ProductRow/>

        <ProductCategoryRow/>
        <ProductRow/>
        <ProductRow/>
        <ProductRow/>*/}

        {
          categoryList
        }
        </tbody>
      </table>
    </>
  )
}