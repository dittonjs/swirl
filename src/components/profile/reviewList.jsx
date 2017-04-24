import React from 'react';
import MaterialButton from '../material_components/material_button';



export default function bathroomListItem(props){
  return(
    <li className='list_item'>
      {props.review.text}
      <MaterialButton type='flat'
        onClick={() => props.deleteReview(props.reviewID)}>
        DELETE
      </MaterialButton>
    </li>
  )
}
