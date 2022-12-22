import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { FeedProps, IPost } from "../../@types/types";

const Feed: React.FC<FeedProps> = ({ username }) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id);
      setPosts(res.data);
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share />}
        {posts.map((p) => (
          <Post
            key={p._id}
            userId={p.userId}
            _id={p._id}
            comment={p.comment}
            createdAt={p.createdAt}
            likes={p.likes}
            img={p.img}
            desc={p.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
