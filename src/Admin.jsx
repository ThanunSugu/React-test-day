import { useEffect, useState } from "react";
import { mockEmployees } from "./mockEmployees";

const Admin = () => {
  const [users, setUser] = useState([]);

  const fetchData = () => {
    setUser(mockEmployees);
  };

  useEffect(fetchData, []);

  const [newName, setNewName] = useState("");
  const [newLastname, setNewLastname] = useState("");
  const [newPosition, setNewPosition] = useState("");

  const addRow = () => {
    const newRow = {
      name: newName,
      lastname: newLastname,
      position: newPosition,
    };
    setUser([...users, newRow]);
    setNewName("");
    setNewLastname("");
    setNewPosition("");
  };

  const deleteRow = (userId) => {
    setUser(users.filter((user) => user.id !== userId));
  };

  return (
    <div className="container-fluid ">
      <div className="row ">
        <div className="col-12 mx-auto pt-5 pb-5 text-center">
          {/* <h1 className="display-1">THIS IS admin page</h1> */}
        </div>
        <div className="container ">
          <h2 className="container ms-4">Create User Here</h2>
        </div>
        <div className="col-3 mx-auto mb-4">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="col-3 mx-auto mb-4">
          <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="lastname"
            value={newLastname}
            onChange={(e) => setNewLastname(e.target.value)}
          />
        </div>
        <div className="col-3 mx-auto mb-4">
          <input
            type="text"
            className="form-control"
            id="position"
            placeholder="position"
            value={newPosition}
            onChange={(e) => setNewPosition(e.target.value)}
          />
        </div>
        <div className="col-1 mx-auto mb-4">
          <button className="btn btn-primary" onClick={addRow}>
            Save
          </button>
        </div>
        <div>
          <table className="table table-white table-striped text-center table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="pt-5">
              {users.map((user, index) => (
                <tr key={index} className="table-row">
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  <td>{user.position}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteRow(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {/* <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
