import React from 'react'
import Button from '../../atoms/Button';
import "./style.css"

function ResultTable({ showDetails, resetForm }) {
    return (
        <section className="right-side">
            <table className="table">
                <tr className="row">
                    <td className="first-col">
                        <label>
                            Tip Amount
                        </label>
                        <span>
                            / person
                        </span>
                    </td>
                    <td className="second-col">
                        <label>
                            {`$${showDetails.tipPerPerson.toFixed(2)}`}
                        </label>
                    </td>
                </tr>
                <tr className="row">
                    <td className="first-col">
                        <label>
                            Total
                        </label>
                        <span>
                            / person
                        </span>
                    </td>
                    <td className="second-col">
                        <label>
                            {`$${showDetails.amtPerPerson.toFixed(2)}`}
                        </label>
                    </td>
                </tr>
            </table>
            <div className="reset-btn">
                <Button handleClick={resetForm}>RESET</Button>
            </div>
        </section>
    )
}

export default ResultTable;