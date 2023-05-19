import PropTypes from 'prop-types';
import './TransactionHistory.css';

export function TransactionHistory({ items }) {
    return (
        <table className="transaction-history">
        <thead>
            <tr>
            <th className="table-header">Type</th>
            <th className="table-header">Amount</th>
            <th className="table-header">Currency</th>
            </tr>
        </thead>
    
        <tbody>
            {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className="table-row">
                <td className="table-cell">{type}</td>
                <td className="table-cell">{amount}</td>
                <td className="table-cell">{currency}</td>
            </tr>
            ))}
        </tbody>
        </table>
    );
    }

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}

    