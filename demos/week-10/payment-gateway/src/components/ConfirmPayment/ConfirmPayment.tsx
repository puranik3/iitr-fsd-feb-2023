import { useState } from 'react';
import Dialog from "../Dialog/Dialog";
import SuccessPayment from '../SuccessPayment/SuccessPayment';

type Props = {
    onNo: () => void,
    onSuccessPaymentClose: () => void
}

const ConfirmPayment = ( props : Props ) => {
    const [ showSuccess, setShowSuccess ] = useState( false );
    
    return showSuccess ? (
        <SuccessPayment
            onClose={props.onSuccessPaymentClose}
        />
    ) : (
        <Dialog
            show={true}
        >
            <div style={{ textAlign: 'center' }}>
                <h3>Proceed to complete the payment?</h3>
                <button
                    className='btn btn-cancel'
                    onClick={props.onNo}
                >
                    No
                </button>
                <button
                    className='btn btn-confirm'
                    onClick={() => setShowSuccess( true )}
                >
                    Yes
                </button>
            </div>
        </Dialog>
    );
}
 
export default ConfirmPayment;