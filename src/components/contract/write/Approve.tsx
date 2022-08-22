import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useApprove } from '../../../hooks/ApproveHook';
import MyNavbar from '../../Navbar/Navbar';

const Approve = () => {

    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState<string>('');

    const approve = useApprove();

    return (
        <>
            <MyNavbar />
            <div style={{
                maxWidth: '700px',
                margin: '0 auto',
                marginTop: '20px'
            }}>
                <h4 className='text-center mt-2'> Approvel</h4>
                <Form.Label htmlFor="basic-url">Address</Form.Label>
                <Form.Control
                    aria-label="Default"
                    placeholder="Enter Address"
                    type="text"
                    aria-describedby="inputGroup-sizing-default"
                    value={address} onChange={(event) => setAddress(event?.target.value)}
                />
                <div className="mt-2">
                    <Form.Label htmlFor="basic-url text-start">Amount</Form.Label>
                    <Form.Control
                        aria-label="Default"
                        placeholder="Enter Amount"
                        type="number"
                        aria-describedby="inputGroup-sizing-default"
                        value={amount} onChange={(event) => setAmount(event?.target.value)}
                    />
                </div>
                <div className="w-50 mt-3 mx-auto">
                    <button className="btn btn-primary w-100" onClick={async () => await approve(address, amount)}>Approve</button>
                </div>
            </div>
        </>
    )
}

export default Approve