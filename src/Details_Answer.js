import {useState, useEffect } from 'react';
import {useParams} from 'react-dom';
import { Nav } from 'react-bootstrap';

function Details(props) {
    let {id}=useParams();
    let μ°Ύμμν=props.shoes.find((x) => {
        x.id==id;
    });
    const [alert, setAlert] = useState(true);
    useEffect(() => {
        let a=setTimeout(() => {
            
        }, 2000);
        return ()=>{clearTimeout(a)}
    }, []);

    
  }
