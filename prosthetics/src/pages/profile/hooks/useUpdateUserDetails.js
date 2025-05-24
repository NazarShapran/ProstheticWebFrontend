import { useState } from 'react';
import { UserService } from '../service/userService';
import { userUserFromLocalStorage } from './userUserFromLocalStorage';

export const useUpdateUserDetails = () => {
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [formValues, setFormValues] = useState(() => {
    const user = userUserFromLocalStorage();
    return {
      fullName: user?.given_name || '',
      email: user?.email || '',
      phoneNumber: user?.phone_number || '',
      birthDate: user?.birthdate || ''
    };
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const updateUserDetails = async (details) => {
    setLoading(true);
    setShowAlert(false);

    // Validate all fields are filled
    const trimmedValues = {
      fullName: details.fullName.trim(),
      email: details.email.trim(),
      phoneNumber: details.phoneNumber.trim(),
      birthDate: details.birthDate.trim()
    };

    if (!trimmedValues.fullName || !trimmedValues.email || 
        !trimmedValues.phoneNumber || !trimmedValues.birthDate) {
      setShowAlert(true);
      setAlertMessage('Усі поля повинні бути заповнені');
      setLoading(false);
      return { success: false };
    }

    try {
      const user = userUserFromLocalStorage();
      const userService = new UserService();
      
      // Convert date from DD.MM.YYYY to ISO format
      const [day, month, year] = trimmedValues.birthDate.split('.');
      if (!day || !month || !year || isNaN(Date.parse(`${year}-${month}-${day}`))) {
        setShowAlert(true);
        setAlertMessage('Неправильний формат дати. Використовуйте формат ДД.ММ.РРРР');
        setLoading(false);
        return { success: false };
      }

      await userService.updateDetails({
        userId: user.sub,
        fullName: trimmedValues.fullName,
        email: trimmedValues.email,
        phoneNumber: trimmedValues.phoneNumber,
        birthDate: `${year}-${month}-${day}T00:00:00.000Z`
      });

      // Update local storage
      const updatedUser = {
        ...user,
        given_name: trimmedValues.fullName,
        email: trimmedValues.email,
        phone_number: trimmedValues.phoneNumber,
        birthdate: trimmedValues.birthDate
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));

      setShowAlert(true);
      setAlertMessage('Дані успішно оновлено');
      return { success: true };
    } catch (error) {
      setShowAlert(true);
      setAlertMessage('Помилка при оновленні даних');
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  // Reset form
  const resetForm = () => {
    const user = userUserFromLocalStorage();
    setFormValues({
      fullName: user?.given_name || '',
      email: user?.email || '',
      phoneNumber: user?.phone_number || '',
      birthDate: user?.birthdate || ''
    });
    setShowAlert(false);
  };

  return {
    formValues,
    loading,
    showAlert,
    alertMessage,
    handleChange,
    updateUserDetails,
    resetForm,
    setShowAlert,
    setAlertMessage
  };
}; 