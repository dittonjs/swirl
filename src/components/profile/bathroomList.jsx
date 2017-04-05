import React from 'react';
import MaterialButton from '../material_components/material_button';



export default function bathroomListItem(props){
  return(
    <li className='list_item'>
      {props.bathroom.bathroomName}
      <MaterialButton type='flat'
        onClick={() => props.deleteBathroom(props.bathroomID)}>
        DELETE
      </MaterialButton>
    </li>
  )
}
