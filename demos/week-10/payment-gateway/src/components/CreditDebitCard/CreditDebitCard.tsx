import { ChangeEvent, Component, FormEvent, Fragment } from "react";
import { range } from '../../services/utils';
import ConfirmPayment from "../ConfirmPayment/ConfirmPayment";

class CreditDebitCard extends Component {
    state = {
        cardNumber: '',
        name: '',
        month: '',
        year: '',
        cvv: '',
        showConfirmDialog: false
    };

    // when some method is set as an event handler, make sure to use arrow function syntax
    updateValue = ( event : ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
        // console.log( this );
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitHandler = ( event : FormEvent ) => {
        event.preventDefault();

        this.setState({
            showConfirmDialog: true
        });
    };

    closeConfirmDialog = () => {
        this.setState({
            showConfirmDialog: false
        })
    }

    closeConfirmDialogAndResetForm = () => {
        this.setState({
            cardNumber: '',
            name: '',
            month: '',
            year: '',
            cvv: '',
            showConfirmDialog: false
        });
    }

    render() {
        const {
            cardNumber,
            name,
            month,
            year,
            cvv,
            showConfirmDialog
        } = this.state;

        const currentYear = (new Date()).getFullYear();

        return (
            <Fragment>
                <form onSubmit={this.submitHandler}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label
                                        htmlFor="cardNumber"
                                    >
                                        Card number
                                    </label>
                                </td>
                                <td>
                                    <input
                                        id="cardNumber"
                                        name="cardNumber"
                                        min="100000000000"
                                        max="999999999999"
                                        value={cardNumber}
                                        onChange={this.updateValue}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                </td>
                                <td>
                                    <input
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={this.updateValue}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label
                                        htmlFor="expiry"
                                    >
                                        Expiry date
                                    </label>
                                </td>
                                <td>
                                    <div id="expiry">
                                        <select
                                            value={month}
                                            onChange={this.updateValue}
                                            name="month"
                                        >
                                            <option value="">mm</option>
                                            {
                                                range( 1, 12 ).map(
                                                    month => (
                                                        <option value={month}>
                                                            {("" + month).padStart(2, "0")}
                                                        </option>
                                                    )
                                                )
                                            }                                        
                                        </select>
                                        <select
                                            value={year}
                                            onChange={this.updateValue}
                                            name="year"
                                        >
                                            <option value="">yyyy</option>
                                            {
                                                range( currentYear, currentYear + 10 ).map(
                                                    year => (
                                                        <option value={year}>
                                                            {year}
                                                        </option>
                                                    )
                                                )
                                            }                                        
                                        </select>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label
                                        htmlFor="cvv"
                                    >
                                        CVV
                                    </label>
                                </td>
                                <td>
                                    <input
                                        id="cvv"
                                        name="cvv"
                                        value={cvv}
                                        onChange={this.updateValue}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button className="btn btn-pay">Pay</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                {showConfirmDialog && (
                    <ConfirmPayment
                        onNo={this.closeConfirmDialog}
                        onSuccessPaymentClose={this.closeConfirmDialogAndResetForm}
                    />
                )}
            </Fragment>
        )
    }
}
 
export default CreditDebitCard;