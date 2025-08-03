import axios from 'axios';

const BASE_URL = import.meta.env.VITE_GITHUB_API_URL;
// const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

export const searchGitHubUsers = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      // headers: {
      //   Authorization: `token ${API_KEY}`
      // }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
