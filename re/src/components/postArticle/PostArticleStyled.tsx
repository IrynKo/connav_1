import styled from 'styled-components'

export const PostArticleStyled = styled.article`
a {
    text-decoration: none;
    color: black;
}
img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    margin-bottom: 20px;
    transition: width 1s, height 1s;
}
img:hover {
    width: 102%;
    height: 210px;
    
}

`