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

  return <div>Feed Page</div>;
}

export default Feed;
