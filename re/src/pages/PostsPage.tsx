import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/loading/Loading";
import Posts from "../components/posts/Posts"
import { useAppDispatch, useAppSelector } from "../hooks";
import { getPosts } from "../redux/posts/postsAction";


const PostsPage = () => {
    const dispatch = useAppDispatch();
    const {loading, posts} = useAppSelector(state=>state.posts)
    useEffect(()=>{
        dispatch<any>(getPosts()) 
    },[])
    
    return(
        <>
       {loading && <Loading/>}
            <Posts/>
       
        </>
    )
}

export default PostsPage