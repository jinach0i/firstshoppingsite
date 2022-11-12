import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';
function Entrance() {
  let Frontdoor = styled.div`
  height: 80vh; margin: 0 auto;
  background: url('./bg.png') no-repeat center center; cursor: pointer;
  `;
  return (
    <>
      <Frontdoor />
      <div className='loading_wrapper'>
        <Spinner animation="grow" variant="info" />
      </div>
    </>
  )
}
export default Entrance;