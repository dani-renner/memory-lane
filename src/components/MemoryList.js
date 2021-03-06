import React from 'react';
import Memory from './Memory';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';


function MemoryList(props) {
  useFirestoreConnect([
    { collection: 'memories' }
  ]);
  const memories = useSelector(state => state.firestore.ordered.memories);

  if (isLoaded(memories)) {
    return (
      <React.Fragment>
        <hr />
        {memories.map((memory) =>
          <Memory
            whenMemoryClicked={props.onMemorySelection}
            title={memory.title}
            date={memory.date}
            memory={memory.memory}
            id={memory.id}
            key={memory.id} />
        )}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Please wait...</h3>
      </React.Fragment>
    )
  }
}

MemoryList.propTypes = {
  onMemorySelection: PropTypes.func
};

export default MemoryList;