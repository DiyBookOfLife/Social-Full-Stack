import { useEffect, useState } from "react";

import { postClient } from "../clients/api";

function Feed() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        // get our posts from db
        const { data } = await postClient.get("/");
        setPost(data);
        // save that in component's state
      } catch (err) {
        console.log(err.response.data);
      }
    }
    getData();
  }, []);

  return;
  <div>
    <h1>Feed Page</h1>
    {posts.map((post) => (
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ))}
  </div>;
}

export default Feed;
