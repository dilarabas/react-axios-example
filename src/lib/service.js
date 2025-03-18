import axios from 'axios';

const getData = async (userId) => {
  try {
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    const userData = userResponse.data;
    userData.posts = postsResponse.data;

    return userData;
  } catch (error) {
    console.error('Veri çekme hatası:', error);
    return null;
  }
};

export default getData;