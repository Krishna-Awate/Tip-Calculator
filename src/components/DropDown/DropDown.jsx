const DropDown = ({ selectHandler, InputText }) => {
  return (
    <>
      <div className="input-group mb-3" style={{ width: "200px" }}>
        {InputText}
        <select
          onChange={selectHandler}
          style={{ width: "200px" }}
          className="form-select"
          id="inputGroupSelect02"
        >
          <option>Choose service</option>
          <option value="0.2">Excellent - 20%</option>
          <option value="0.1">Medium - 10%</option>
          <option value="0.05">Not so good - 5%</option>
        </select>
      </div>
    </>
  );
};

export default DropDown;
