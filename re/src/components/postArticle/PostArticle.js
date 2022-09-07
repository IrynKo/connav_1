import React from "react";
import { Link } from "react-router-dom";
import { PostArticleStyled } from "./PostArticleStyled";


const PostArticle = ({ article }) => {
   
  return (
    <PostArticleStyled >
      <Link to={"/posts/" + article.id}>
        <img  className="product-item__img" src={article.acf.image.url} alt={article.acf.title} />
      <h5 className="product-item__name">{article.acf.title} </h5>
      </Link>
         </PostArticleStyled>
  );
};

export default PostArticle;
