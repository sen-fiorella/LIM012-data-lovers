export const alphabetOrder = (firstLetter, condition) => {
  const result = firstLetter;
  if (condition === 'a-z') {
    result.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      return -1;
    });
  }
  if (condition === 'z-a') {
    result.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      return -1;
    });
  }
  return result;
};
// Filter
export const roleFilter = (championsRol, choseFilter) => {
  const byFilter = championsRol.filter((obj) => {
    let filterResult = '';
    for (let i = 0; i < obj.tags.length; i += 1) {
      if (obj.tags[i] === choseFilter) {
        filterResult += obj.tags[i];
      }
    }
    return filterResult;
  });
  return byFilter;
};
