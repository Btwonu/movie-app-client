const createTitle = (string) => {
  let pattern = /[\W|_]/g;
  let title = string.trim().replace(pattern, ' ');

  let wordsArr = title.split(' ').filter((x) => x);
  return wordsArr
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
};

export default createTitle;
