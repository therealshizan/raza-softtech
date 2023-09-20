const useFetch = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Error Fetching Data ' + error);
  }
};

export default useFetch;
