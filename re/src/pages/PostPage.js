import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SinglePost from "../components/singlePost/SinglePost";
import { getPost } from "../redux/posts/postsAction";

const PostPage = () => {
    const id = useParams().id;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPost(id))
    },[])
    
    return(
        <>
        <SinglePost/>
        </>
    )
    }
    
    export default PostPage