import { useUpdateuserMutation } from "Features/UserAPI";
import { useDelUserMutation } from "Features/UserAPI";
import { useGetUserbyIdQuery } from "Features/UserAPI";
import React, { useEffect, useState } from "react";

const User = ({ updateToggle }) => {
  let { data, isLoading } = useGetUserbyIdQuery(3);
  const [userEditdata, setUserEditdata] = useState([]);
  const [user, setUser] = useState([]);
  const [userfunc, userarr] = useUpdateuserMutation();
  const [userDelfunc, useDelrarr] = useDelUserMutation();
  useEffect(() => {
    {
      isLoading ? "" : setUserEditdata(data[0]);
    }
  }, [isLoading]);

  const UserChange = (e) => {
    setUserEditdata({ ...userEditdata, [e.target.name]: e.target.value });

    updateToggle(true);
  };

  const updateUser = () => {
    var clicked = confirm("Update User?");
    if (clicked == true) {
      userfunc(userEditdata);
    } else {
      ("");
    }

    updateToggle(false);
  };

  const delUser=()=>{
    var clicked = confirm("Do You Want To Delete The User?");
    if (clicked == true) {
      userDelfunc(userEditdata)
    } else {
      ("");
    }
  }
  return (
    <>
      <input
        type="text"
        className="form-control"
        id="user"
        // onFocus={() => getuserId()}
        name="name"
        value={userEditdata.name}
        onChange={(e) => UserChange(e)}
      />
      <input
        type="text"
        className="form-control"
        name="email"
        value={userEditdata.email}
        onChange={(e) => UserChange(e)}
      />

      <div className="d-flex">
      <div className="form-group form-check mt-2">
        {/* <input type="checkbox" className="form-check-input" id="manager" />
        <label className="form-check-label" htmlFor="manager">
        </label> */}
          <span className="bg-success text-white px-3 py-1 rounded-3" onClick={() => updateUser()}>
            Update
          </span>
      </div>

      <div className="form-group form-check mt-2 ms-2">
        {/* <input
          type="checkbox"
          className="form-check-input"
          id="delmanager"
        />
        <label className="form-check-label">
          </label> */}
          <span
            className="bg-danger text-white px-3 py-1 rounded-3"
            onClick={() =>delUser()}
          >
            Delete
          </span>
      </div>
      </div>
    </>
  );
};

export default User;
