import React from "react";
import PropTypes from "prop-types";

function MemoryDetail(props) {
  const { memory, onClickingDelete } = props;
  return(
    <>

    <button onCLick={() => onClickingDelete(memory.id) }>Delete Memory</button>
    </>
  );
}

MemoryDetail.propTypes = {
  memory: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default MemoryDetail;