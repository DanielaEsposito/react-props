import posts from "../data/posts.jsx";
export default function Tags() {
  const allTags = posts.map((posts) => posts.tags).flat();
  const tags = [];
  allTags.forEach((tag) => {
    if (!tags.includes(tag)) tags.push(tag);
    //console.log(tags);
  });
  return (
    <div className="tag">
      {tags.map((tag) => {
        if (tag === "html") {
          return <span className="tags red">#{tag}</span>;
        }
        if (tag === "css") {
          return <span className="tags light-blu">#{tag}</span>;
        }
        if (tag === "js") {
          return <span className="tags yellow">#{tag}</span>;
        }
        if (tag === "php") {
          return <span className="tags blu">#{tag}</span>;
        }
      })}
    </div>
  );
}
