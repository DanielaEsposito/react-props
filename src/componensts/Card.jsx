import Button from "./Button/Button.jsx";

export function Card() {
  return (
    <>
      <div className="card-container col">
        <div className="card">
          <div className="card-img-container">
            <img
              src="src/assets/img/img-prova.jpg"
              className="card-img-top img-fluid"
              alt=""
            />
          </div>
          <div className="card-body">
            <h5 className="card-title fw-semibold"></h5>
            <p className="card-text"></p>
            <Button />
          </div>
        </div>
      </div>
      ;
    </>
  );
}
