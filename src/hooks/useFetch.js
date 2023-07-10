import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {  
  const [data, setData] = useState(null);
  const getData = async () => {
    await axios.get(url).then((response) => {
      setData(response.data);
      
  });
  }
  useEffect(() => {
    getData()
  }, [url]);

  
  return [data];
};

export default useFetch;