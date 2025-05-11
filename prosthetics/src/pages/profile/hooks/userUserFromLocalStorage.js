import { useState, useEffect } from "react";

export const userUserFromLocalStorage = () => {
  const [user, setUser] = useState({
    fullName: '',
    phone: '',
    birthDate: '',
    email: ''
  });

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (error) {
        console.error('Помилка парсингу user з localStorage', error);
      }
    }
  }, []);

  return user;
};
