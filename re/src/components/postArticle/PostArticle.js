import React from "react";
import { Link } from "react-router-dom";
import { PostArticleStyled } from "./PostArticleStyled";


const PostArticle = ({ article }) => {
   
  return (
    <PostArticleStyled >
      <Link to={"/posts/" + article.id}>
        <img  className="mb-2 product-item__img" src={article.acf.image.url} alt={article.acf.title} />
      <h6 className="product-item__name">{article.acf.title} </h6>
      </Link>
         </PostArticleStyled>
  );
};

export default PostArticle;
