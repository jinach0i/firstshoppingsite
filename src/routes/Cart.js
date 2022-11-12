import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
function Cart() {
    let state=useSelector(state=>state.cart);
    let dispatch=useDispatch();
    return(
        <Table responsive="lg">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
            <th>배송비</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td></td>
            <td><input type="number" min={1} step='1' placeholder='1'/><button onClick={() => {
              {dispatch(state.plus())}
            }}>+</button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td></td>
            <td><button>+</button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td></td>
            <td><button>+</button></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    )

}
export default Cart