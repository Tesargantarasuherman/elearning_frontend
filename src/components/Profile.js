import React from "react";

function Profile(props) {
  return (
    <div className="body-profile">
      <form>
        <div className="form-group">
          <label>Nama</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            value={props.state.nama}
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={props.state.email}
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Update
        </button>
      </form>
    </div>
  );
}

export default Profile;
