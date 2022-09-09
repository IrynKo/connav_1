import styled from 'styled-components'
import mask from '../../assets/image/mask.svg'

const BusinessSystemStyled = styled.section`
background: #266554;
padding: 40px 0;
li {
    position: relative;
    padding-bottom: 15px;
    margin-bottom: 40px;
    border-bottom: solid 1px white;
    color: white;
}
li:after {
    content:'';
    position: absolute;
    right: 0;
    top: 0;
    background-image:url(${mask});
    display: block;
    height: 25px;
    width: 15px;
    background-repeat: no-repeat;
    //transform: rotate(0deg);
    transition: transform .3s;
    
}
li.close:after  {
    transform: rotate(180deg);
}
li:hover:after  {
    opacity: 0.6;
    cursor: pointer;
}
h6:hover {
    opacity: 0.6;
    cursor: pointer;
}

ul, h2 {
    width: 100%;
    display: block;
    margin: 0 auto;
    @media (min-width: 767px) {
        width: 50%;
    }


}
h2 {
    text-aline: center;
    color: white;
    margin-bottom: 30px;
}
p {
    display: none;
}
.close {
    p {
        display: block;
        margin-top: 50px;
        font-size: 14px;
        font-style: italic;
    }
}

`

export default BusinessSystemStyled