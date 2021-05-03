import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function NewMemoryForm(props) {
  const firestore = useFirestore();

  function addMemoryToFirestore(event) {
    event.preventDefault();
    props.onNewMemoryCreation();
    return firestore.collection('memories').add(
      {

      }
    );
  }

  return(
    <>
    </>
  )
}

NewMemoryForm.propTypes = {
  onNewMemoryCreation: PropTypes.func
};

export default NewMemoryForm;