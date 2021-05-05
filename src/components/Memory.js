import React from 'react';
import PropTypes from 'prop-types';



function Memory(props) {
  return (
    <>
      <div onClick={() => props.whenMemoryClicked(props.id)}>
      <p>{props.title}</p>
      <p>{props.date}</p>

      </div>
    </>
  );

}




Memory.propTypes = {

  title: PropTypes.string,
  date: PropTypes.string,
  memory: PropTypes.string,
  id: PropTypes.string,
  creator: PropTypes.string,
  whenCreated: PropTypes.func,
  whenMemoryClicked: PropTypes.func
}

export default Memory;