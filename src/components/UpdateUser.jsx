import { useUpdateuserMutation } from 'Features/UserAPI';
import React from 'react'

const UpdateUser = () => {
    const [userfunc, userarr] = useUpdateuserMutation();
    const updateuser=({byuserupdate})=>{
        console.log("update btn",byuserupdate)
        var clicked=confirm("Update Manager?");
        if (clicked==true)
          {
            // userfunc(updateuser2);
           }
        else
         {
          ''
        }
      
        setUpdatemyUser(false)
      }
    return (
    <>
   <div className="form-group form-check mt-2">
        <input type="checkbox" className="form-check-input" id="manager" />
        <label className="form-check-label" htmlFor="manager">
          <span className="bg-success text-white px-3 py-1 rounded-3" onClick={() => updateUser()}>
            Update
          </span>
        </label>
      </div>
    </>
  )
}

export default UpdateUser