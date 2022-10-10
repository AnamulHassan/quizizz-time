const loaderApiData = async () => {
  const initialData = await fetch(
    'https://openapi.programming-hero.com/api/quiz'
  );
  const finalData = await initialData.json();
  return finalData;
};
export default loaderApiData;
