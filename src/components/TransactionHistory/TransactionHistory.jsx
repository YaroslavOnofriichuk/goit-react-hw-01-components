import PropTypes from 'prop-types';
import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';
import Table from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <TransactionHistoryItem key={item.id} item={item} />
                ))}
            </tbody>
        </Table>
    );
};

TransactionHistory.propTypes = {
    item: PropTypes.object,
};

export default TransactionHistory;
