import React from "react";
import { useSelector } from "react-redux";
import { SinglePostStyled } from "./SinglePostStyled";


const SinglePost = () => {
    const postDetail = useSelector((state) => state.post);
  return (
       <SinglePostStyled className="container">
            <h3 className="mb-3" >{postDetail.post?.acf?.title} </h3>
            <img className="mb-3" src={postDetail.post?.acf?.image.url} alt={postDetail.post?.acf?.title} />
            <p dangerouslySetInnerHTML={{__html: postDetail.post?.content?.rendered}} />
           
        </SinglePostStyled>
        
  );
};

export default SinglePost;
