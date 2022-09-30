const Button = ({ btnText, btnClickHandler }) => {
  return (
    <>
      <button
        onClick={btnClickHandler}
        type="button"
        className="btn btn-primary"
      >
        {btnText}
      </button>
    </>
  );
};

export default Button;
