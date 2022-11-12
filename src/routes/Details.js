import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown, CardGroup, Card, Button, Tab, Tabs } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Data from '../data';
import styled from 'styled-components';
import axios from 'axios';

// 생명주기:인생에 빗대어 compo에도 주기가 있음(갱신,삭제,생성mount 등):
// 생명주기 중요성=각 주기마다 요령있게 코드 갈고리를 걸어서 더 재미난 코드를 실행 시킬 수 있음

// 옛날 compo 모습:
// class 부락쥐 extends React.Component{
//   componentDidMount(){}
//   componentDidUpdate(){}
//   componentDidUnmount(){}
// }
function Cards() {
  // 이 compo가 mount,update시(dev모드에선 2번 실행되나 배포 후엔  html의 rendering 뒤 1번만 실행되니 안심ㄱㄱ싫으면 index.html의 strictmode관련 문장 삭제ㄱㄱ) 다음 effect code실행:
  // useeffect vs function 안 코드 차이:실행 시기 차이(useeffect는 rendering후에 실행됨):

  // component's updating=?re-rendering:
  const [상품data, set상품data] = useState(Data);
  const [count, setCount] = useState(0);
  const [조회수, set조회수] = useState(['79', '114', '82']);

  // 특정 문자 부분에 +1이 되어가는 배열 만들기?:
  const [상품이미지, set상품이미지] = useState(['https://codingapple1.github.io/shop/shoes1.jpg', 'https://codingapple1.github.io/shop/shoes2.jpg', 'https://codingapple1.github.io/shop/shoes3.jpg']);

  // 동적UI만드는법 1)UI 상태를 저장할 state:
  const [alert, setAlert] = useState(true);
  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(!alert)
    }, 2000);
    console.log(2);
    return () => {
      console.log(1);
      clearTimeout(a)
    }}, []);
  let BtnR = styled.button`
  background : lightblue; color: black; padding: 8px; border: none; width: 
  // Btn변수가 써질때 sbtn이라는 props가 활성화됩니다:
  ${props => props.btnsize}; 
  height: ${props => props.btnsize}; border-radius: 6px; font-weight: ${props => props.btnsize >= '100px' ? 'bold' : 'normal'}`;
  const [스위치, set스위치] = useState(false);
  return (
  
    <div>
      <Navbar className='navbar' bg="light" variant="light" expand='lg'>
        <Container>
          <Navbar.Brand href="#home" className="navlogo">
            <img
              alt="로고"
              src="https://picsum.photos/40/40?random=1"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            FIRST
          </Navbar.Brand>
          <BtnR btnsize="48px">🛒</BtnR>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {
        alert == true ? <div className='alert alert-warning'><a href="#">2초 이내 사면 할인</a></div> : null
      }
      <ul style={{ display: 'flex' }}>
        <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>가나다순</a></li>
        <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>가격 낮은순</a></li>
        <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>가격 높은순</a></li>
      </ul>

      <CardGroup>
        {
          상품data.map((i, a) => {
            return (
              <Card className='card'  key={i} style={{'cursor':'pointer'}}>
                <Card.Img variant="top" src={상품이미지[a]} />
                <Card.Body>
                  <Card.Title >{상품data[a].title}</Card.Title>
                  <p>조회수: {조회수[a]}회</p>
                  <Card.Text>
                    \{상품data[a].price}
                  </Card.Text>
                  <Button variant="warning">🛒</Button>
                  <Button variant="warning">Buy now</Button>
                </Card.Body>
              </Card>
            )
          })}

      </CardGroup>
      {/* 숙제1:2번째 누르면 7,8,9번째 data를 가져오기
      숙제2:3번째 누르면 더보기란 없애기: */}
      <button className='more-btn' onClick={() => {
        // 로딩중UI띄우기 작업 만들어두기

        // server에 값 요청 하는 방법1~GET~:
        axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((결과) => {
            // data 만지기 전에 출력을 해보길 추천:
            console.log(상품data);
            console.log(결과.data);
            let copy = [...상품data, ...결과.data];
            set상품data(copy);
            // 로딩중UI 숨기기:
          })

          .catch(() => {
            // 로딩중UI 숨기기:
            console.log('실패함ㅅㄱ');

          })

        // server로 data를 보내기:
        // axios.post('url',{});

        // axios.get 여러곳에 요청하기법?:
        //   Promise.all([axios.get('url1',() => {
        //     {}
        //   })
        //   ,axios.get('url2',() => {
        //     {}
        //   })
        // //  상위 get요청들이 전부 성공했을때 띄울 함수:
        // ]).then(() => {
        //   {}
        // });

        // ㄴ개론 server와의 소통 원칙1:server와 소통할때 자료형=?문자형
        // ㄴ이지만, arr,obj형도 JSON형태("{"name":"choi"}")식으로 쓰면 되지
        // ㄴ그러니까 이 AXIOS LIB가 JSON형태로 다 바꿔주는 역활도 하는구나 알 수 있음
        // server에 값 요청 하는 방법2~FETCH~:
        // fetch('').then((결과) => {
        // ㄴ단*,일일이 JSON<->arr/obj 변환(""화) 수동으로 시켜줘야함
        //   {결과.json}
        // }).then((data) => {
        //   {}
        // });

      }}>더보기</button>
    </div>
  )
}

function Item() {
  const [조회수, set조회수] = useState(['79', '114', '52']);
  const [상품이미지, set상품이미지] = useState(['https://codingapple1.github.io/shop/shoes1.jpg', 'https://codingapple1.github.io/shop/shoes2.jpg', 'https://codingapple1.github.io/shop/shoes3.jpg']);
  // 각 상품을 누르면 해당 순서 번호대로 url이 바뀌면서 이동되게는 어떻게 할까?:
  let { productsp } = useParams();
  console.log(productsp);
  const [tabSwitch, setTabSwitch] = useState(0);
  return (
    <div>
      <div className='tabs-wrap'>
        <Tabs
          // defaultActiveKey=처음 접속하자마자 떠있을 tab의 eventKey
          defaultActiveKey="tab0"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <TabsIter tabSwitch={tabSwitch}/>
        </Tabs>
      </div>
      <CardGroup>
        <Card className='card' style={{ width: '250px' }}>
          <Card.Img variant="top" src={상품이미지[productsp]} />
          <Card.Body>
            <input type="number" step={5} placeholder="아무 숫자를 입력하세요." />
            <Card.Title>{Data[productsp].title}</Card.Title>
            <p>조회수: {조회수[productsp]}회</p>
            <Card.Text>
              \{Data[productsp].price}
            </Card.Text>
            <Button variant="warning">🛒</Button>
            <Button variant="warning">Buy now</Button>
          </Card.Body>
        </Card>
      </CardGroup>

    </div>
  )
}

function TabsIter({tabSwitch}) {
  return (
    [<Tab eventKey="tab0" title="상세정보"></Tab>,
    <Tab eventKey="tab1" title="후기"></Tab>,
    <Tab eventKey="tab2" title="배송"></Tab>,
    <Tab eventKey="tab3" title="문의"></Tab>][{tabSwitch}]
  )
}
export { Cards, Item };