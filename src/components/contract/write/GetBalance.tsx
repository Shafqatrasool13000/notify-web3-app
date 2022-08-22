import React from 'react'

const GetBalance = () => {
  return (
    <div>GetBalance</div>
  )
}

export default GetBalance
// import React, { useEffect, useRef, useState } from 'react'
// import { Form } from 'react-bootstrap'
// import { useBalance } from '../../../hooks/BalanceHook';
// import MyNavbar from '../../Navbar/Navbar';

// const GetBalance = () => {
//     const inputRef = useRef('');

//     const [address, setAddress] = useState(null);
//     const balance = useBalance(address);

//     useEffect(()=>{
//     },[address])
    
//     const handleInputChange=() => {
//         setAddress(inputRef.current.value)
//     }
//     return (
//         <>
//             <MyNavbar />
//             <div style={{
//                 maxWidth: '700px',
//                 margin: '0 auto',
//                 marginTop: '20px'
//             }}>
//                 <h4 className='text-center mt-2'>Balance</h4>

//                 <Form.Label htmlFor="basic-url">Address</Form.Label>
//                 <Form.Control
//                     aria-label="Default"
//                     placeholder="Enter Address"
//                     type="text"
//                     name='account'
//                     aria-describedby="inputGroup-sizing-default"
//                     // value={address} onChange={(event) => setAddress(event?.target.value)
//                     // }
//                     ref={inputRef}
//                 />
//                 <div className="w-50 mt-3 mx-auto">
//                     <button className="btn btn-primary w-100" onClick={handleInputChange} >Get Balance</button>
//                 </div>
//                 <h5 className='mt-4'>Balance is : {balance&&balance}</h5>
//             </div>
//         </>
//     )
// }

// export default GetBalance