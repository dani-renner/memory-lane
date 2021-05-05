import React from "react";
import PropTypes from "prop-types";

function MemoryDetail(props) {
  const { memory, onClickingDelete } = props;

  return (
    <>
      <div className="card-list">
        <h3>{memory.title}</h3>
        <h4>{memory.date}</h4>
          {memory.map((memoryImage) => 
            <div className="card">
              <img
                className="card--image"
                alt={memoryImage.alt_description}
                src={memoryImage.urls.full}
                width="50%"
                height="50%"
              ></img>
            </div>)
          }
      </div>
      <button onCLick={() => onClickingDelete(memory.id)}>Delete Memory</button>

    </>
  );
}

MemoryDetail.propTypes = {
  memory: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default MemoryDetail;