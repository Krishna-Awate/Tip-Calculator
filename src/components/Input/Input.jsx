const Input = ({ InputBillHandler, value, InputText }) => {
  return (
    <>
      <div className="form-group row" style={{ width: "320px" }}>
        <div className="col-xs-2">
          <label htmlFor="ex1">{InputText}</label>
          <input
            type="text"
            value={value}
            className="form-control"
            id="ex1"
            onChange={InputBillHandler}
          />
        </div>
      </div>
    </>
  );
};

export default Input;
