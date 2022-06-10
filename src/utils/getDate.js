const getDate = (objDate) => {
  let date = objDate.getDate() ;
  let month = objDate.getMonth() + 1;
  const year = objDate.getFullYear();
  date = date >= 10 ? date : "0" + date;
  month = month >= 10 ? month : "0" + month;
  console.log({ date, month, year });
  return { date, month, year };
};
export { getDate };
