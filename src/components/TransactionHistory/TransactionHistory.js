import PropTypes from "prop-types";
import {
  TransactionTable,
  TransactionTitle,
  TableString,
  TableBody,
  TableItem,
} from "./TransactionHistory.styled";

export default function TransactionHistory({ items }) {
  return (
    <TransactionTable className="transaction-history">
      <thead>
        <TableString>
          <TransactionTitle>Type</TransactionTitle>
          <TransactionTitle>Amount</TransactionTitle>
          <TransactionTitle>Currency</TransactionTitle>
        </TableString>
      </thead>

      {items.map(({ id, type, amount, currency }) => (
        <TableBody key={id}>
          <TableString>
            <TableItem>{type}</TableItem>
            <TableItem>{amount}</TableItem>
            <TableItem>{currency}</TableItem>
          </TableString>
        </TableBody>
      ))}
    </TransactionTable>
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
  ),
};
