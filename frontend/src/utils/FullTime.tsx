import moment from "jalali-moment";

const fullDate = (date:Date | string) => {
  return moment(date).locale("fa").format("D/MMM/YYYY");
};

export default fullDate;
