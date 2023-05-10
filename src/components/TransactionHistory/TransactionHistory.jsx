import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistory}>
    <thead>
      <tr className={css.rowHead}>
        <th className={css.head}>Type</th>
        <th className={css.head}>Amount</th>
        <th className={css.head}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr className={css.rowBody} key={id}>
          <td className={css.cell}>{type}</td>
          <td className={css.cell}>{amount}</td>
          <td className={css.cell}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
};

export default TransactionHistory;
