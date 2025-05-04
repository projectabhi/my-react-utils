import { useEffect, useState } from "react";

const Home = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  console.log("render", resourceType);
  useEffect(() => {
    console.log("onMount", resourceType);
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setItems(json);
      });

    return () => {
      // Cleanup code here
      console.log("Unmount", resourceType);
    };
  }, [resourceType]);
  return (
    <>
      <div className="custom-body">
        <pre className="text-gray-700 md:hover:text-primary-700 dark:text-gray-200">
          Usage of useRef (open devtools for proper visualization)
        </pre>
        <button
          type="button"
          className="custom-button"
          onClick={() => setResourceType("posts")}
        >
          Posts
        </button>
        <button
          type="button"
          className="custom-button"
          onClick={() => setResourceType("users")}
        >
          Users
        </button>
        <button
          type="button"
          className="custom-button"
          onClick={() => setResourceType("comments")}
        >
          Comments
        </button>
        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          {resourceType}
        </h2>
        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          {items.map((item) => {
            return <li>{JSON.stringify(item)}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
export default Home;
