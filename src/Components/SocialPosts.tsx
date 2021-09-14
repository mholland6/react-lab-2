import { useState } from "react";
import PostInList from "./PostInList";
import Post from "../models/Post"
import "./SocialPosts.css";
import PostForm from "./PostForm";

function SocialPosts() {
  const [ posts, setPosts] = useState<Post[]>([
    {title: "Title1", thought: "Thought1"}, 
    {title: "Title2", thought: "Thought2"},
    {title: "Title3", thought: "Thought3"},
  ]) 
    //{title: "Example Post", thought: "Example Thought"},
  //]);
  //How does the below function work when starting with
  //an empty array?, and why does the above solution work?
  function handleFormSubmit(newPost: Post) {
    setPosts(prev => [ ...prev, newPost]);
    setModal(false);
  }

  function deletePost(index: number): void {
    setPosts(prev => [ ...prev.slice(0, index), ...prev.slice(index + 1)]);
  }

  const [isModal, setModal] = useState(false);
  let addClass = "";
  if (isModal) {
    addClass = " Displayed";
  }

  return (
    <div className="SocialPosts">
      <h1 className="SocialPosts--H1">My Thoughts</h1>
      <button className="ModalDisplayButton" onClick={() => setModal(true)} >New Thought</button>
      <div className={"Modal" + addClass}> 
        <button className="CloseModalButton" onClick={() => setModal(false)}>&times;</button>
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