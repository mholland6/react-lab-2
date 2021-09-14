import "./PostInList.css";
import Post from "../models/Post";
import PostForm from "./PostForm";

interface Props {
  post: Post;
  onDelete: () => void;
}

function PostInList({post, onDelete}: Props) {
  
  
  return (
    <div className="PostInList" >
      <section className="PostInList--Post">
        <section className="PostInList--Text">
          <p className="">{post.title}</p>
          <p className="PostInList--ThoughtText">{post.thought}</p>
        </section>
        <section className="PostInList--Button">
          <button className="PostInList--DeletePostButton" onClick={onDelete}><img src="../public/outline_delete_black_24dp.png"/></button>
        </section>
      </section>
    </div>
  );
}

export default PostInList;