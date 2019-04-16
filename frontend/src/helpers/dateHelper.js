import React from "react";
import Moment from "react-moment";

const DateHelper = timestamp => (
  <Moment format="MMMM Do YYYY, h:mm:ss a">{timestamp}</Moment>
);
export default DateHelper;
