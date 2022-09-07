import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/loading/Loading";
import Posts from "../components/posts/Posts"
import { getPosts } from "../redux/posts/postsAction";


const PostsPage = () => {
    const dispatch = useDispatch();
    const data = useSelector(state=>state.posts)
    useEffect(()=>{
        dispatch(getPosts()) 
    },[])
    
    return(
        <>
       
       {data?.loading && <Loading/>}
            <Posts/>
        </>
    )
    }
    
    export default PostsPage