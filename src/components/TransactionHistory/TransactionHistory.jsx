import css from "./TransactionHistory.module.css";
import clsx from "clsx";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.tr}>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => {
          let even;
          if (index === 0 || index % 2 === 0) {
            even = true;
          }
          return (
            <tr key={item.id} className={clsx(css.tr, even && css.trIsEven)}>
              <td className={css.td}>{item.type}</td>
              <td className={css.td}>{item.amount}</td>
              <td className={css.td}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
