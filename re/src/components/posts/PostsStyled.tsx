import styled from "styled-components";

export const PostsStyled = styled.section `
    .blog-bg {
       padding-bottom: 40px; 
    }
    li {
        display: block;
        margin: 0 auto;
        margin-bottom: 40px;
    }
    li:hover {
        opacity: 0.8;
    }

    h1 {
        text-align: center;
        width: 80%;
        margin: 0 auto;
        margin-bottom: 20px;
        @media (min-width: 767px) {
            width: 50%;
        }
    }
    h4 {
        text-align: center;
        margin: 0 auto;
        width: 100%;
        margin-bottom: 50px;
        @media (min-width: 767px) {
            width: 50%;
        }
    }
`