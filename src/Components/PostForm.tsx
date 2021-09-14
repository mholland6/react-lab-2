import "./PostForm.css";
import Post from "../models/Post";
import { FormEvent, useState } from "react";
import displayModal from "../Components/SocialPosts"
import { VoidExpression } from "typescript";

interface Props {
  onSubmit: (post: Post) => void;
  onClose: () => void;
}

function PostForm({ onSubmit }: Props) {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    //use the state to do something
    const post: Post = {
      title: title,
      thought: thought
    };
  //call the callback prop here
  onSubmit(post);  
  //reset the form
  setTitle("");
  setThought("");
  
  }

    //<button className="CloseModalButton" onClick={() => displayModal()}>&times;</button>

  return (
    <div className="ModalForm2">
    <button className="ModalCloseButtonInsideForm" type="button">&times;</button>  
    <form className="PostForm" onSubmit={handleSubmit}>
      
      <p>
        <label htmlFor="PostForm__title">Title</label>
        <input type="text" id="PostForm__title" 
          value={title} onChange={e => setTitle(e.target.value)}/>
      </p>
      <p>
        <label htmlFor="PostForm__thought">Thought</label>
        <input type="text" id="PostForm__thought" 
            value={thought} onChange={e => setThought(e.target.value)}/>
      </p>
      <p>
        <button type="submit">Add Post</button>
      </p>
    </form>
    </div>
  );
}

export default PostForm;