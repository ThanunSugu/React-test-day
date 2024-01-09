import { useEffect, useState } from "react";
import { mockEmployees } from "./mockEmployees";

const User = () => {
  const [users, setUser] = useState([]);

  const fetchData = () => {
    setUser(mockEmployees);
  };

  useEffect(fetchData, []);
  return (
    <div className="container-fluid ">
      <div className="row ">
        <div className="col-12 mx-auto pt-5 pb-5 text-center">
          {/* <h1 className="display-1">THIS IS user page</h1>  */}
        </div>
      </div>
      <table className="table table-white table-striped text-center table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody className="pt-5">
          {users.map((user) => (
            <tr key={user.id} className="table-row">
              <td>{user.name}</td>
              <td>{user.lastname}</td>
              <td>{user.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
