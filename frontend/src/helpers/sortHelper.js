function compare(a, b) {
  if (a.voteScore < b.voteScore) {
    return 1;
  } else if (a.voteScore > b.voteScore) {
    return -1;
  }
  return 0;
}

const sortHelper = array => {
  array.sort(compare);
};

export default sortHelper;
