const FindTip = ({ totalTip }) => {
  const tip = totalTip.map((items, index) => {
    return <li key={index}>{items}</li>;
  });
  return <ul>{tip}</ul>;
};
export default FindTip;
