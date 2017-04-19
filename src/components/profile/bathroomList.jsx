import React from 'react';
import MaterialButton from '../material_components/material_button';



export default function commonListItem(props){
  return(
    <li className='list_item'>
      {props.children}
      <MaterialButton type='flat'
        onClick={props.deleteItem}>
        DELETE
      </MaterialButton>
    </li>
  )
}
