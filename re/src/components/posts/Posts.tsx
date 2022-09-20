
import { useSelector } from "react-redux"
import { useAppSelector } from "../../hooks";
import { IPost } from "../../redux/posts/postsReducer";
import PostArticle from "../postArticle/PostArticle";
import { PostsStyled } from "./PostsStyled";



const Posts = () => {
    const {posts}:{posts:IPost[]} = useAppSelector(state=>state.posts)
    console.log(posts)
 return (
     <PostsStyled className="container">
          
 <div className="blog-bg">
            <h1>From the Minds of Scouts</h1>
            <h4>Insights and Resources gathered from a globally distributed team of designers, developers, magicians, and a “go-to-innovators”.</h4>
        </div>
     <ul className="row">
     {
        posts?.length>1 && posts?.map(item=>(
             <li className="col-lg-5 col-sm-10" key={item.id}>
                 <PostArticle article={item}/>              
            </li>
         ))
     }   
     </ul>
     </PostsStyled>
 )   
}

export default Posts
/**
 */