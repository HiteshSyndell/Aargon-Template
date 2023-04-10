import { useUpdateuserMutation } from "Features/UserAPI";
import { useDelUserMutation } from "Features/UserAPI";
import { useGetUserbyIdQuery } from "Features/UserAPI";
import React, { useEffect } from "react";
import { useState } from "react";

const Manager = ({ updateToggle }) => {
  let { data, isLoading } = useGetUserbyIdQuery(2);
  //   const [userEditdata, setUserEditdata] = useState([]);
  const [userfunc, userarr] = useUpdateuserMutation();
  const [manager, setManager] = useState([]);
  const [userDelfunc, useDelrarr] = useDelUserMutation();

  useEffect(() => {
    {
      isLoading ? "" : setManager(data[0]);
    }
  }, [isLoading]);

  const UserChange = (e) => {
    setManager({ ...manager, [e.target.name]: e.target.value });

    updateToggle(true);
  };

  const updateUser = () => {
    var clicked = confirm("Update Manager?");
    if (clicked == true) {
      userfunc(manager);
    } else {
      ("");
    }

    updateToggle(false);
  };

  let getmanagerId = () => {
    // console.log("managerId",getId)
    // setGetId(2)
  };
  const delUser=()=>{
    var clicked = confirm("Do You Want To Delete The Manager?");
    if (clicked == true) {
      userDelfunc(manager)
    } else {
      ("");
    }
  }

  let checkboxdel=()=>{
    const gettwo=document.getElementById('tow')

    if(gettwo.checked){
      localStorage.setItem("m_del",gettwo.checked)
    }
    else{
      localStorage.removeItem("m_del")
    }
  }

  let checkboxedit=()=>{
    const gettwo=document.getElementById('one')

    if(gettwo.checked){
      localStorage.setItem("m_edit",gettwo.checked)
    }
    else{
      localStorage.removeItem("m_edit")
    }
  }
  return (
    <>
      <input
        type="text"
        className="form-control"
        id="manager"
        name="name"
        value={manager.name}
        onChange={(e) => UserChange(e)}
        onFocus={() => getmanagerId()}
      />
      <input
        type="text"
        className="form-control"
        name="email"
        value={manager.email}
        onChange={(e) => UserChange(e)}
      />

      <div className="d-flex">
      <div className="form-group form-check mt-2">
          <span className="bg-success text-white px-3 py-1 rounded-3" onClick={() => updateUser()}>
            Update
          </span>
      </div>

      <div className="form-group form-check mt-2 ms-2">
        {/* <input
          type="checkbox"
          className="form-check-input"
          id="delmanager"
        /> */}
        {/* <label className="form-check-label">
          </label> */}
          <span
            className="bg-danger text-white px-3 py-1 rounded-3"
            onClick={() =>delUser()}
          >
            Delete
          </span>
      </div>
      </div>

      <div className="d-flex "> 
      <p>Permission Allowcated: </p>
      <label className="form-check-label me-3" htmlFor="one">
        <input type="checkbox" className="form-check-input ms-1" id="one"  onChange={()=>checkboxedit()}/>
        Update
        </label>
      <p>Permission Allowcated: </p>
      <label className="form-check-label" htmlFor="tow">
        <input type="checkbox" className="form-check-input ms-1" id="tow" onChange={()=>checkboxdel()}/>
        Delete
        </label>
      </div>
    </>
  );
};

export default Manager;
