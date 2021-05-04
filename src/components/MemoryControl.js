import React from 'react';
import NewMemoryForm from './NewMemoryForm';
import MemoryList from './MemoryList';
import MemoryDetail from './MemoryDetail';
import PropTypes from 'prop-types';
import * as a from './../actions';
import { withFirestore } from 'react-redux-firebase';

class MemoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedMemory: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedMemory != null) {
      this.setState({
        selectedMemory: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleChangingSelectedMemory = (id) => {
    this.props.firestore.get({ collection: 'memories', doc: id }).then((memory) => {
      const firestoreMemory = {
        memoryDate: memory.get("memoryDate"),
        creator: memory.get("creator"),
        whenCreated: memory.get("whenCreated"),
        id: memory.id
      }
      this.setState({ selectedMemory: firestoreMemory });
    });
  }

  handleDeletingMemory = (id) => {
    this.props.firestore.delete({ collection: "memories", doc: id });
    this.setState({ selectedMemory: null });
  }

  handleAddingNewMemoryToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }
  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingMemoryInList = () => {
    this.setState({
      editing: false,
      selectedMemory: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditMemoryForm memory={this.state.selectedMemory} onEditMemory={this.handleEditingMemoryInList} />;
      buttonText = "Return to Memory List";
    } else if (this.state.selectedMemory !== null) {
      currentlyVisibleState =
        <MemoryDetail
          memory={this.state.selectedMemory}
          onClickingDelete={this.handleDeleingMemory}
          onClickingEdit={this.handleEditClick} />;
      buttonText = "Return to Memory List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewMemoryForm onNewMemoryCreation={this.handleAddingNewMemoryToList} />;
      buttonText = "Return to Memory List";
    } else {
      currentlyVisibleState = <MemoryList onMemorySelection={this.handleChangingSelectedMemory} />;
      buttonText = "Add memory";
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

MemoryControl.propTypes = {
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}

MemoryControl = connect(mapStateToProps)(MemoryControl);

export default withFirestore(MemoryControl);