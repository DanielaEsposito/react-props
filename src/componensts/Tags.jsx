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
          return <span className="tags filter  red">#{tag}</span>;
        }
        if (tag === "css") {
          return <span className="tags filter light-blu">#{tag}</span>;
        }
        if (tag === "js") {
          return <span className="tags filter yellow">#{tag}</span>;
        }
        if (tag === "php") {
          return <span className="tags filter blu">#{tag}</span>;
        }
      })}
    </div>
  );
}
