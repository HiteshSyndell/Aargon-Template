import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import typography from "assets/theme/base/typography";
import { Container } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import { useUpdateuserMutation } from "Features/UserAPI";
import { useGetUserbyIdQuery } from "Features/UserAPI";
import { useDelUserMutation } from "Features/UserAPI";
import Manager from "components/Manager";
import User from "components/User";

function Default() {
  let { data, isLoading } = useGetUserbyIdQuery(3);
  const [userEditdata, setUserEditdata] = useState([]);
  const [update,setUpdate]=useState(false)
  const [updatemyUser,setUpdatemyUser]=useState(false)
  const [getId,setGetId]=useState(1)

  const [userfunc, userarr] = useUpdateuserMutation();
  const [userDelfunc, useDelrarr] = useDelUserMutation();

  const { size } = typography;
  let getadmin = localStorage.getItem("admin");
  const admin = JSON.parse(getadmin);
  let getmanager = localStorage.getItem("manager");
  const manager = JSON.parse(getmanager);
  let getuser = localStorage.getItem("user");
  const user = JSON.parse(getuser);

  let checkAdmin = localStorage.getItem("ifadmin");
  let checkManager = localStorage.getItem("ifmanager");
  let checkUser = localStorage.getItem("ifuser");
  let per_edit = localStorage.getItem("m_edit");
  let per_del = localStorage.getItem("m_del");

  
  useEffect(() => {
    {
      isLoading ? "" : setUserEditdata(data[0]);
    }
  }, [isLoading]);

  console.log("userdatabyid", userEditdata);
  
  var keys = Object.keys(localStorage);
  for (let key of keys) {
    const outdata = `${localStorage.getItem(key)}`;
  }
  
  const UserEdit = () => {
    var clicked = confirm("Update Manager?");
    if (clicked == true) {
      userfunc(userEditdata);
    } else {
      ("");
    }

    // update(false);
  };
    
  

    let delalert=()=>{
      let check=document.getElementById('manager')
    }
    
    const UserChange=(e)=>{
      setUserEditdata({ ...userEditdata, [e.target.name]: e.target.value })
      setUpdate(true)
  }

  const delUser=()=>{
    var clicked=confirm("Do You Want To Remove Manager?");
      if (clicked==true)
        {
          userDelfunc(userEditdata);
         }
      else
       {
        ''
      }
  }

  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        <Footer />
      </DashboardLayout>
      {checkAdmin || checkManager ? (
        <Container style={{ position: "absolute", top: "23%", left: "15%" }}>
          {checkAdmin ? (
            <>
              {isLoading ? (
                <h1>Loading...</h1>
              ) : (
                <>
                  <label>Manager</label>

                  <Manager updateToggle={setUpdate}/>
                  <div className="d-flex">
                 
                  </div>



                  <label htmlFor="user">User</label>

                    <User updateToggle={setUpdatemyUser}/>

                  <div className="d-flex">
                  
                  </div>
                  
                </>
              )}
            </>
          ) : (
            <>
              {checkManager ? (
                <>
                <label htmlFor="user">User</label>
                  <label htmlFor="admin">User</label>
                  <input
                    type="text"
                    className="form-control"
                    id="admin"
                    name="name"
                    value={userEditdata.name}
                    onChange={(e) =>
                      setUserEditdata({ ...userEditdata, [e.target.name]: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    className="form-control"
                    id="admin"
                    name="email"
                    value={userEditdata.email}
                    onChange={(e) =>
                      setUserEditdata({ ...userEditdata, [e.target.name]: e.target.value })
                    }
                  />
                  
                  <div className="d-flex float-end">
                  {
                    <>
                    {
                      per_edit?
                      <button className="btn btn-primary float-end mt-2 me-2" onClick={UserEdit}>
                    Edit
                  </button>
                  :
                  <>
                     {
                      per_del?
                  <button className="btn btn-danger float-end mt-2" onClick={delUser}>
                    Delete
                  </button>
                  :
                  ""
                     }
                     </> 
                  }
                    </>
                  }
                  </div>
                </>
              ) : (
                ""
              )}
            </>
          )}
        </Container>
      ) : (
        <Container style={{ position: "absolute", top: "23%", left: "15%" }}>
          <h1>Welcome To The Material UI Dashboard</h1>
        </Container>
      )}
    </>
  );
}

export default Default;
