const increment = (val) => {
  return {
    type: "INCREMENT",
    inc: val,
  };
};

export default increment;
