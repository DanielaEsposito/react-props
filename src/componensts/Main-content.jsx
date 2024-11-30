import Card from "./Card.jsx";
import Tags from "./Tags.jsx";
import posts from "../data/posts.jsx";
export default function Main() {
  return (
    <>
      <main>
        <section className="card-main">
          <div className="container ">
            <div className="row row-cols-3">
              {posts
                .filter((post) => post.published === true)
                .map((post) => (
                  <Card
                    key={post.id}
                    title={post.title}
                    image={post.image}
                    content={post.content}
                    tags={post.tags}
                  />
                ))}
            </div>
          </div>
        </section>
        <section className="tags-section">
          <div className="container">
            <h2>TAGS</h2>
            <div>
              <Tags />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
