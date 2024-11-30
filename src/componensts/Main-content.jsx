import Card from "./Card.jsx";
import posts from "../data/posts.jsx";
export default function Main() {
  return (
    <>
      <main>
        <section className="card-main">
          <div className="container d-flex flex-wrap">
            {posts
              .filter((post) => post.published === true)
              .map((post) => (
                <Card
                  key={post.id}
                  title={post.title}
                  img={post.image}
                  content={post.content}
                  tags={post.tags}
                />
              ))}
          </div>
        </section>
      </main>
    </>
  );
}
