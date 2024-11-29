import Card from "./Card.jsx";
import Post from "../data/posts.jsx";
export default function Main() {
  return (
    <>
      <main>
        <section className="card-main">
          <div className="container">
            <div className="row row-cols-2">
              <Card />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
