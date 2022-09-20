import React from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../hooks";
import { IPost } from "../../redux/posts/postsReducer";
import Loading from "../loading/Loading";
import { SinglePostStyled } from "./SinglePostStyled";


const SinglePost = () => {
    const {loading, post}: {loading:boolean, post:IPost} = useAppSelector((state) => state.post);
    
  return (
    <>
    {loading && <Loading/>}
       <SinglePostStyled className="container">
          <h3 className="mb-3" >{post?.acf.title} </h3>
                     <img className="mb-3" src={post?.acf.image.url} alt={post?.acf.title} />
                     <p dangerouslySetInnerHTML={{__html: post?.content?.rendered}} />
                    
           
        </SinglePostStyled>
    </>
        
        );
      };
      
      export default SinglePost;