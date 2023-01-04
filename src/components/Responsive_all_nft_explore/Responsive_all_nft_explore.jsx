import React, { useState } from 'react'
import Canvas_accordian from '../Canvas_accordian/Canvas_accordian'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


export default function Responsive_all_nft_explore({ name, ...props }) {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  return (
    <div>

     
         {[ 'bottom'].map((placement, idx) => (
        <Canvas_accordian key={idx} placement={placement} name={placement} />
      ))}
    </div>
  )
}
