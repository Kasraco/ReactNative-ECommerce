import moment from "jalali-moment";

const fullDate = (date: any) => {
  return moment(date).locale("fa").format("D/MMM/YYYY");
};

export default fullDate;
