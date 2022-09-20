import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SinglePost from "../components/singlePost/SinglePost";
import { useAppDispatch } from "../hooks";
import { getPost } from "../redux/posts/postsAction";

type PostParams = {
    id: string;
  };

const PostPage = () => {
    const {id} = useParams<PostParams>();
    console.log(id);
    
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch<any>(getPost(id as string))
    },[])
    
    return(
        <>
        <SinglePost/>
        </>
    )
    }
    
    export default PostPage