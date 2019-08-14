import React from 'react';

import './styles.css';

function Table(props) {
    const row = (element) => {
        return (
            <tr className="Background">
                <td className="Customer-Name">
                    {element.customer.name}
                </td>
                <td className="Loan-Amount">
                    {element.loan_amount}
                </td>
                <td className="Loan-Start-Date">
                    {element.start_date}
                </td>
                <td>
                    {element.status}
                </td>

            </tr>
        )
    }
    return (
        <React.Fragment>
            <table>
                <tr>
                    <th className="Cliente">Cliente</th>
                    <th className="Cliente">Préstamo</th>
                    <th className="Cliente">Fecha</th>
                    <th className="Cliente">Estado</th>
                </tr>
                {
                    props.data.loans.map(loan => 
                        (row(loan))
                    )
                }
            </table>
        </React.Fragment>
    )

}

export default Table