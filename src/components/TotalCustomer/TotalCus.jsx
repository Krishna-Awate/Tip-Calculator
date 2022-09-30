import styles from "../style.module.css";
const TotalCus = ({ totalCutomer, totalTip }) => {
  return (
    <>
      <div className={styles.output}>
        <table>
          <tbody>
            <tr>
              <td>{totalCutomer}</td>
              <td>{totalTip}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default TotalCus;
