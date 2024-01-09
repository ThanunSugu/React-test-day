import { useState } from "react";
import Layout from "./Layout";
import Admin from "./Admin";
import User from "./User";
import React from "react";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

const Home = () => {
  // const [setEmployees, employees] = useState(false);
  const [sector, setSector] = useState("");

  const handleClick = (value) => {
    setSector(value);
  };

  return (
    <Layout>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-12 mx-auto pt-5 pb-5 text-center">
            <h1 className="display-1">Generative Thailand</h1>
            <h1 className="display-1">
              {sector === "user"
                ? "Home - User Sector"
                : sector === "admin"
                ? "Home - Admin Sector"
                : "React Assessment"}
            </h1>
          </div>
        </div>

        <div className="container d-flex justify-content-center">
          <div className="mx-auto ">
            <button
              className="  btn btn-white post-button border shadow"
              onClick={() => handleClick("user")}
            >
              User Home Sector
            </button>
          </div>
          <div className="mx-auto ">
            <button
              className="  btn btn-white post-button border shadow"
              onClick={() => handleClick("admin")}
            >
              Admin Home Sector
            </button>
          </div>
        </div>
        <div>
          <DisplayInfo choice={sector} />
        </div>
      </div>
      {/* </div> */}
    </Layout>
  );
};

function DisplayInfo(props) {
  // let display;
  if (props.choice === "admin") {
    return <Admin />;
  } else if (props.choice === "user") {
    return <User />;
  } else {
    return <p>"Please select an option."</p>;
  }

  // return <div>{display}</div>;
}

export default Home;
