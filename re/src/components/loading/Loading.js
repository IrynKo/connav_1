import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components';

const LoadingStyled= styled.div`
margin: 0 50%;
`

const Loading = () => {
 
 return (
     <>
    <LoadingStyled>
    <Spinner animation="border" variant="success" />
    </LoadingStyled>
   
     </>
 )   
}

export default Loading
