import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from "react-redux-firebase";

function EditMemoryForm(props) {
  const firestore = useFirestore();
  const { memory } = props;

  function handleEditMemoryFormSubmission(event) {
    event.preventDefault();
    props.onEditMemory();
    const propertiesToUpdate = {
      title: event.target.title.value,
      date: event.target.date.value,
      memory: event.target.memory.value
    }
    return firestore.update({ collection: "memories", doc: memory.id }, propertiesToUpdate);
  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleEditMemoryFormSubmission}
        buttonText="Update memory" />
    </>
  );
}

EditMemoryForm.propTypes = {
  memory: PropTypes.object,
  onEditMemory: PropTypes.func
};

export default EditMemoryForm;