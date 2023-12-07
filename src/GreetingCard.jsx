import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GreetingCard = ({ occasion = "Generic Occasion", recipient = "Friend" }) => {
    return (
        <div className='d-flex align-items-center justify-content-center vh-100 flex-column' style={{ backgroundColor: '#6F9283' }}>
            <h1 className='text-light'>Greeting Card</h1>
            <div className="card text-center m-5 p-2" style={{ width: '25rem', height: '17rem', borderRadius: '17px', border: 'none', boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffff' }}>
                <div className="card-body d-flex align-items-center justify-content-center">
                    <p className="card-text text-success fs-2 fw-bold">🎉 Happy {occasion}, {recipient}!</p>
                </div>
            </div>
        </div>
    );
};

export default GreetingCard;
