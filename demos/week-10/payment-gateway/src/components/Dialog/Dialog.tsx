import { ReactNode } from 'react';

import './Dialog.css';

type Props = {
    children: ReactNode,
    show: boolean
}

const Dialog = ( props : Props ) => {
    console.log( 'props = ', props );

    return props.show ? (
        <div className="dialog-overlay">
            <div className="dialog">
                {props.children}
            </div>
        </div>
    ) : null;
}
 
export default Dialog;