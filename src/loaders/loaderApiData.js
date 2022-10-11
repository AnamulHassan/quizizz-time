const loaderApiData = async () => {
  const initialData = await fetch(
    'https://openapi.programming-hero.com/api/quiz'
  );
  const finalData = await initialData.json();
  return finalData;
};
const loaderApiDataWithId = async id => {
  const initialData = await fetch(
    `https://openapi.programming-hero.com/api/quiz/${id}`
  );
  const responseData = await initialData.json().then(result => result);
  const finalData = Promise.resolve(responseData);
  return finalData;
};
export { loaderApiData, loaderApiDataWithId };
