// export const example = () => 'example';
// export const anotherExample = () => 'OMG';
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
