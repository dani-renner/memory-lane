import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MemoryDetail(props) {
  const { memory, onClickingDelete } = props;

  return (
    <>
      {/* <div className="card-list"> */}
        <h3>{memory.title}</h3>
        <h4>{memory.date}</h4>
        <p>{memory.memory}</p>
          {/* {photos.map((memoryImage) => 
            <div className="card">
              <img
                className="card--image"
                alt={memoryImage.alt_description}
                src={memoryImage.urls.full}
                width="50%"
                height="50%"
              ></img>
            </div>)
          } */}
      {/* </div> */}
      <button onClick={() => onClickingDelete(memory.id)}>Delete Memory</button>
      <Link to={`/searchphotos/${memory.id}`}>
        <button >Add Image</button>
      </Link>
    </>
  );
}

MemoryDetail.propTypes = {
  memory: PropTypes.object,
  onClickingDelete: PropTypes.func,
};

export default MemoryDetail;