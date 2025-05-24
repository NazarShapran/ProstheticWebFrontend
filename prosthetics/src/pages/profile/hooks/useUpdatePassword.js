import { useState } from 'react';
import { UserService } from '../service/userService';
import { userUserFromLocalStorage } from './userUserFromLocalStorage';

export const useUpdatePassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const user = userUserFromLocalStorage();

  const validatePassword = (password) => {
    const errors = {};

    if (!password || password.length < 8) {
      errors.password = "Пароль повинен містити мінімум 8 символів";
    }

    if (!/[A-Z]/.test(password)) {
      errors.password = "Пароль повинен містити хоча б одну велику літеру";
    }

    if (!/[a-z]/.test(password)) {
      errors.password = "Пароль повинен містити хоча б одну малу літеру";
    }

    if (!/[0-9]/.test(password)) {
      errors.password = "Пароль повинен містити хоча б одну цифру";
    }

    return Object.keys(errors).length > 0 ? errors : null;
  };

  const updatePassword = async ({ newPassword }) => {
    setLoading(true);
    setError(null);

    const validationErrors = validatePassword(newPassword);
    if (validationErrors) {
      setError(validationErrors);
      setLoading(false);
      return { success: false, errors: validationErrors };
    }

    try {
      const userService = new UserService();
      await userService.updatePassword(user.id, {
        password: newPassword
      });

      return { success: true };
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Помилка при оновленні паролю';
      setError({ general: errorMessage });
      return { success: false, errors: { general: errorMessage } };
    } finally {
      setLoading(false);
    }
  };

  return {
    updatePassword,
    loading,
    error
  };
}; 