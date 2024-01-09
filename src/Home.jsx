import Layout from "./Layout";

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
  return (
    <Layout>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-12 mx-auto pt-5 pb-5 text-center">
            <h1 className="display-1">Generative Thailand</h1>
            <h1 className="display-1">Home - User Sector</h1>
          </div>
        </div>

        <div className="container d-flex justify-content-center">
          <div className="mx-auto ">
            <button className="  btn btn-white post-button border shadow">
              User Home Sector
            </button>
          </div>
          <div className="mx-auto">
            <button className="  btn btn-white post-button border shadow ">
              Admin Home Sector
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
