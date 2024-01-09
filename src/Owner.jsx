import Layout from "./Layout";

const Owner = () => {
  return (
    <Layout>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-12 mx-auto pt-5 pb-5 text-center">
            <h1 className="display-3">Thanun - JSD 6 - 28</h1>
          </div>
          <div className="col-12 mx-auto  text-center">
            <img
              src="src/asset/1.jpg"
              alt="MyPicture"
              style={{ width: "400px" }}
            />
          </div>
          <div className="col-6 mx-auto pt-5 pb-5 text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              consectetur earum delectus deleniti alias ex, est voluptatibus
              amet, optio ad reprehenderit corporis soluta voluptas saepe
              tempora voluptate nam cupiditate. Quibusdam dolor assumenda
              aliquam ipsa? Culpa eius cum, eos perspiciatis assumenda animi
              consequatur. Tenetur maiores facere dolorum fugit ullam
              consequuntur harum cum odit natus alias consequatur provident quae
              modi delectus fugiat maxime architecto ad porro eveniet dolores
              dolor culpa quibusdam, velit quasi. Voluptates adipisci blanditiis
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Owner;
