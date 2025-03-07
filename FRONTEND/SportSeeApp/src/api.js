export const api = {
  get: async (url) => {
    try {
      const response = await fetch(`http://localhost:3000/${url}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
}