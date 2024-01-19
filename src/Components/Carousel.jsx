import { useContext } from "react";
import { RecipeContext } from "../context/recipes";
import loadingGif from "../assets/Loading.gif";

function Carousel() {
  const { topThree, loading } = useContext(RecipeContext);
  console.log(loading);

  return (
    <>
      {loading ? (
        <div className="text-center">
          <img src={loadingGif} alt="" />
        </div>
      ) : (
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={topThree[0].image}
                alt=""
                className="d-block w-100"
                style={{ height: "300px" }}
              />
              <div className="carousel-caption">
                <h3>{topThree[0].name}</h3>
                <p>Note : {topThree[0].rating}</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={topThree[1].image}
                alt=""
                className="d-block w-100"
                style={{ height: "300px" }}
              />
              <div className="carousel-caption">
                <h3>{topThree[1].name}</h3>
                <p>Note : {topThree[1].rating}</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={topThree[2].image}
                alt=""
                className="d-block w-100"
                style={{ height: "300px" }}
              />
              <div className="carousel-caption">
                <h3>{topThree[2].name}</h3>
                <p>Note : {topThree[2].rating}</p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      )}
    </>
  );
}

export default Carousel;
