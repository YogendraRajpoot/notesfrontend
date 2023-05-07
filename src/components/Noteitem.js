import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card">
        {/* <img src="" className="card-img-top" alt="" /> */}
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
          <div className="d-flex justify-content-between">
            <i
              className="far fa-trash-alt"
              onClick={() => {
                deleteNote(note._id);
              }}
            ></i>
            <i
              className="far fa-edit"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
          </div>
        </div>
      </div>

      {/* <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                        <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
                    </div>
                    <p className="card-text">{note.description}</p>

                </div>
            </div> */}
    </div>
  );
};

export default Noteitem;
