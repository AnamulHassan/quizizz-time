const storeDataLocal = (name, number) => {
  let answer = [];
  const previousNum = localStorage.getItem(name);
  if (previousNum) {
    answer = JSON.parse(previousNum);
    answer = [...answer, number];
  } else {
    answer = [...answer, number];
  }
  localStorage.setItem(name, JSON.stringify(answer));
};

const getStoreDataLocal = () => {
  const correctAnswers = JSON.parse(localStorage.getItem('correct-answer'));
  const incorrectAnswers = JSON.parse(localStorage.getItem('incorrect-answer'));
  return { correctAnswers, incorrectAnswers };
};
const removeStoreDataLocal = () => {
  localStorage.removeItem('correct-answer');
  localStorage.removeItem('incorrect-answer');
};
export { storeDataLocal, getStoreDataLocal, removeStoreDataLocal };
