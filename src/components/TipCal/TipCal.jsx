import Input from '../Input/Input';
import Button from '../Button/Button';
import DropDown from '../DropDown/DropDown';
import { useState } from 'react';
import FindTip from '../FindTip/FindTip';
import styles from '../style.module.css';
import TotalCus from '../TotalCustomer/TotalCus';
import Footer from '../Footer/Footer';

const TipCal = () => {
  const [inputBill, setInputBill] = useState('');
  const [select, setselect] = useState(0);
  const [list, setlist] = useState([]);
  const [inputName, setInputName] = useState('');
  const [totalCustomer, setTotalCustomer] = useState([]);
  const [tip, setTip] = useState([]);
  const [totalTip, settotalTip] = useState([]);

  const InputBillHandler = (e) => {
    const value = e.target.value;
    setInputBill(value);
  };

  const InputCustomerHandler = (e) => {
    const value = e.target.value;
    setInputName(value);
  };

  const selectHandler = (e) => {
    const value = e.target.value;
    setselect(value);
  };

  const btnAddCustomerHandler = () => {
    if (inputName && inputBill) {
      const totalTip = inputBill * select;
      const tipItems = [...tip];
      tipItems.push(totalTip);
      setTip(tipItems);
      const items = [...list];
      items.push(`${inputName} offering Tip of ${totalTip} ₹`);
      setlist(items);
    }
    setInputName('');
    setInputBill('');
  };

  const btnTotalTipHandler = () => {
    if (tip && totalTip && totalCustomer) {
      const tipItems = [...tip];
      const totalCustomer = tipItems.length;
      setTotalCustomer(`Total customers : ${totalCustomer}`);
      const data = tipItems.reduce((total, current) => total + current);
      settotalTip(`Total Tip is : ${data} ₹`);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Tip Calculator</h2>
          <h5>Build in React</h5>
        </div>
        <div className={styles.data}>
          <div className={styles.input}>
            <Input
              InputText='Enter your bill Amount'
              InputBillHandler={InputBillHandler}
              value={inputBill}
            />
          </div>

          <div className={styles.slection}>
            <div className={styles.selectioField}>
              <DropDown
                InputText='How was the service'
                selectHandler={selectHandler}
              />
              <Input
                InputText='Enter customer name'
                InputBillHandler={InputCustomerHandler}
                value={inputName}
              />
              <Button
                btnText='Add Customer '
                btnClickHandler={btnAddCustomerHandler}
              />
            </div>
          </div>

          <div className={styles.list}>
            <h6 style={{ textAlign: 'center' }}>Customer list</h6>
            <FindTip totalTip={list} />
          </div>

          <div
            style={{ marginLeft: '180px', marginTop: '10px' }}
            className={{ marginTop: '100px' }}
          >
            <Button
              btnText='Calculate Total Customer & Total Tip'
              btnClickHandler={btnTotalTipHandler}
            />
          </div>

          <div className={styles.total}>
            <TotalCus totalCutomer={totalCustomer} totalTip={totalTip} />
          </div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default TipCal;
