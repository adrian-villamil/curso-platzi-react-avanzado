import axios from "axios";
import { useEffect, useState } from "react";

export const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getCategories() {
      try {
        const response = await axios.get('https://petgram-server-edsf8xpy2.now.sh/categories');
        setCategories(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    getCategories();
  }, []);

  return { categories, loading };
};