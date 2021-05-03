import React from 'react';
import PropTypes from 'prop-types';


function Memory(props){
  return (
    <>
    <div onClick = {() => props.whenMemoryClicked(props.id)}>

    </div>
    </>
  )
}




Memory.propTypes = {
  memoryDate: PropTypes.string,



  creator: PropTypes.string,
  whenCreated: firestore.FieldValue.serverTimestamp(),
  whenMemoryClicked: PropTypes.func
}

export default Memory;