import Button from "./Button/Button.jsx";

export default function Card({ id, title, image, content, tags }) {
  return (
    <>
      <div key={id} className="card-container col">
        <div className="card">
          <div className="card-img-container">
            <img src={image} className="card-img-top img-fluid" alt="" />
          </div>
          <div className="card-body">
            <h5 className="card-title fw-semibold">{title}</h5>
            <p className="card-text">{content}</p>

            <Button />
          </div>
        </div>
      </div>
      ;
    </>
  );
}
