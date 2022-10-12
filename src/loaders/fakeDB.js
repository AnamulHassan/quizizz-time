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
  const correctAnswer = JSON.parse(localStorage.getItem('correct-answer'));
  const incorrectAnswer = JSON.parse(localStorage.getItem('incorrect-answer'));
  return { correctAnswer, incorrectAnswer };
};
export { storeDataLocal, getStoreDataLocal };
