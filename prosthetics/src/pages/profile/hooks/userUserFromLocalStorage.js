export const userUserFromLocalStorage = () => {
  try {
    const userData = localStorage.getItem('user');
    if (userData) {
      return JSON.parse(userData);
    }
  } catch (error) {
    console.error('Помилка парсингу user з localStorage', error);
  }
  
  return {
    given_name: '',
    email: '',
    phone_number: '',
    birthdate: '',
    sub: ''
  };
};
