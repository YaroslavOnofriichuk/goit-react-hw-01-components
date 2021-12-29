import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';

const Table = styled.table`
    table-layout: fixed;
    width: 244px;
    border: 2px solid black;
    font-size: 16px;

    thead {
        text-align: center;
        background-color: Cyan;
        color: white;
    }
`;

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
