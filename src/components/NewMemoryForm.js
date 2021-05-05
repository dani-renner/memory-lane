import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function NewMemoryForm(props) {
  const firestore = useFirestore();

  function addMemoryToFirestore(event) {
    event.preventDefault();
    props.onNewMemoryCreation();
    return firestore.collection('memories').add(
      {
        title: event.target.title.value,
        date: event.target.date.value,
        memory: event.target.memory.value,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler={addMemoryToFirestore}
        buttonText="Submit" />
        <hr/>
    </>
  );
}

NewMemoryForm.propTypes = {
  onNewMemoryCreation: PropTypes.func
};

export default NewMemoryForm;