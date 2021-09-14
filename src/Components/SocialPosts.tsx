import { useState } from "react";
import PostInList from "./PostInList";
import Post from "../models/Post"
import "./SocialPosts.css";
import PostForm from "./PostForm";

function SocialPosts() {
  const [ posts, setPosts] = useState<Post[]>([]) 
    //{title: "Example Post", thought: "Example Thought"},
  //]);
  //How does the below function work when starting with
  //an empty array?, and why does the above solution work?
  function handleFormSubmit(newPost: Post) {
    setPosts(prev => [ ...prev, newPost]);
  }

  function deletePost(index: number): void {
    setPosts(prev => [ ...prev.slice(0, index), ...prev.slice(index + 1)]);
  }

  const [isModal, displayModal] = useState(false);
  let addClass = "";
  if (isModal) {
    addClass = "Displayed";
  }

  return (
    <div className="SocialPosts">
      <h1 className="SocialPosts--H1">My Thoughts</h1>
      <button className="ModalDisplayButton" onClick={() => displayModal(true)} >New Thought</button>
      <div className={"Modal" + addClass}> 
        <button className="CloseModalButton" onClick={() => displayModal(false)}>&times;</button>
        <div className="ModalForm"><PostForm onSubmit={handleFormSubmit}/></div>
      </div>
      
      <div className="PostInList--Container">
      <div className="PostInList">
      {posts.map((post, i) => 
          <PostInList post={post} key={i} onDelete={() => deletePost(i)}/>)}  
      </div>  
      </div>
    </div>

  );
}

export default SocialPosts;