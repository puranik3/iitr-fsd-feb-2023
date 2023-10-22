// only function components can call useState to maintain state
import { useState, MouseEvent } from 'react'
// import React from 'react'; // not needed for React 18+
import PaymentOptions from "../../types/PaymentOptions";
import CreditDebitCard from "../CreditDebitCard/CreditDebitCard";
import NetBanking from "../NetBanking/NetBanking";
import UPI from '../UPI/UPI';

import './Menu.css';

const paymentOptions = [
    PaymentOptions.CCDC,
    PaymentOptions.NET_BANKING,
    PaymentOptions.UPI
];

console.log( paymentOptions );

const Menu = () => {
    console.log( 'component rendered' );

    // "state" -> is data that a component maintains, and which changes with time. As the data changes, the UI will refresh. State data is not maintained using local variable.
    // Hey React! pls maintain a state variable for me - react returns in an array [ value, setter ]

    const [ option, setOption ] = useState( PaymentOptions.CCDC );
    
    // const els = [
    //     <button className="payment-option">
    //         CC
    //     </button>,
    //     <button className="payment-option">
    //         NET
    //     </button>,
    //     <button className="payment-option">
    //         UPI
    //     </button>,
    // ];

    // const els = paymentOptions.map( po => (
    //     <button className="payment-option">
    //         {po}
    //     </button>
    // ));

    // Within {} in an element's content -> {number}, {string}, {element}, {array of number, string, element}
    // {boolean/null/undefined} -> does not show anything

    const clickHandler = ( event : MouseEvent ) => {
        alert( 'clicked' );
    };

    return (
        <div className="menu">
            <div className="payment-options">
                {
                /*
                <button className="payment-option">
                    CC
                </button>
                <button className="payment-option">
                    Net
                </button>
                <button className="payment-option">
                    UPI
                </button>
                */
                }
                {/*els*/}
                {
                    // returns an array of react elements, which is fine
                    paymentOptions.map( po => (
                        <button className={"payment-option " + ( ( po === option ) ? "payment-option-selected" : "")} onClick={( event ) => setOption( po )}>
                            {po}
                        </button>
                    ))
                }
            </div>
            <div className="payment-details">
                {option === PaymentOptions.CCDC && <CreditDebitCard />}
                {option === PaymentOptions.NET_BANKING && <NetBanking />}
                {option === PaymentOptions.UPI && <UPI />}
            </div>
        </div>
    );
};

export default Menu;