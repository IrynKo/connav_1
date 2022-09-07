import styled from 'styled-components'

const NextLevelStyled = styled.section `
//.title{
 //   transform: translateX(${({ animate }) => (animate ? '0' : '-100vw')});
 //   transition: transform 1s;

//}
li {
    margin-bottom: 50px;
   // visibility: hidden;
}
.vis-0 {   
 //visibility: ${props => (props.isVisible > 2100 && `visible`)}; 
 //transform: translateX(${props => (props.isVisible > 2000 ? 0 : '-100vw')});
 //opacity: ${props => (props.isVisible > 2100 ? 1 : 0)};
 //transition: opacity cubic-bezier(0, 0.52, 1, 1) 1s;
 //transition: transform 2s;
}
.vis-1 h6{
   // opacity: ${props => (props.isVisible  ? 1 : 0)};
   // transition: opacity cubic-bezier(0, 0.52, 1, 1) 1s;
}
.vis-1  p{
   // opacity: ${props => (props.isVisible ? 1 : 0)};
   // transition: opacity cubic-bezier(0, 0.52, 1, 1) 1s;
}
.vis-1 img {
    //opacity: ${props => (props.isVisible  ? 1 : 0)};
    //transition: opacity cubic-bezier(0, 0.52, 1, 1) 1s;
}
.vis-2 {
   // opacity: ${props => (props.isVisible > 2500 ? 1 : 0)};
   // transition: opacity cubic-bezier(0, 0.52, 1, 1) 1s;
}
li:nth-of-type(even) {
    display: flex;
    flex-direction: row-reverse;
}
`
export default NextLevelStyled