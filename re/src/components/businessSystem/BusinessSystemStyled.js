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
    top: 25%;
    background-image:url(${mask});
    display: block;
    height: 25px;
    width: 15px;
    background-repeat: no-repeat;

}

ul, h2 {
    width: 50%;
    display: block;
    margin: 0 auto;

}
h2 {
    width: 50%;
    text-aline: center;
    color: white;
}
p {
    display: none;
}
.close {
    p {
        display: block;
    }
}

`

export default BusinessSystemStyled