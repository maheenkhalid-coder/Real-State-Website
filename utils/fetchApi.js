import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '97e1a674e4msh7be9325843bb2ffp1df396jsn9a94ac64df5d'
    }
  });
    
  return data;
}