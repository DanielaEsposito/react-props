import Button from "./Button/Button.jsx";
import defaultImage from "../assets/img/defaultImg.svg";
export default function Card({ title, image, content, tags }) {
  const imgPath = image ?? defaultImage;
  return (
    <>
      <div className="card-container col">
        <div className="card">
          <div className="card-img-container">
            <img src={imgPath} className="card-img-top img-fluid" alt="" />
          </div>
          <div className="card-body">
            <h5 className="card-title fw-semibold">{title}</h5>
            <p className="card-text">{content}</p>
            {tags ? (
              <div className="tag">
                {tags.map((tag) => {
                  if (tag === "html") {
                    return <span className="tags red">#{tag}</span>;
                  }
                  if (tag === "css") {
                    return <span className="tags blu">#{tag}</span>;
                  }
                  if (tag === "js") {
                    return <span className="tags yellow">#{tag}</span>;
                  }
                })}
              </div>
            ) : (
              ""
            )}

            <Button />
          </div>
        </div>
      </div>
    </>
  );
}
