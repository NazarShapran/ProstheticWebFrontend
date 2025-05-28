import { useState } from 'react';
import { UserService } from '../service/userService';
import { userUserFromLocalStorage } from './userUserFromLocalStorage';

export const useUpdateUserDetails = () => {
  const [loading, setLoading] = useState(false);
  const [invalidFields, setInvalidFields] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'info'
  });
  const [formValues, setFormValues] = useState(() => {
    const user = userUserFromLocalStorage();
    return {
      fullName: user?.given_name || '',
      email: user?.email || '',
      phoneNumber: user?.phone_number || '',
      birthDate: user?.birthdate || ''
    };
  });

  const validateForm = (values) => {
    const newInvalidFields = {};
    const errors = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{10,12}$/;
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.\d{4}$/;

    if (!values.fullName.trim() || values.fullName.length < 3) {
      newInvalidFields.fullName = true;
      errors.push("ПІБ має містити мінімум 3 символи");
    }

    if (!values.phoneNumber.trim() || !phoneRegex.test(values.phoneNumber)) {
      newInvalidFields.phoneNumber = true;
      errors.push("Невірний формат номера телефону");
    }

    if (!values.birthDate.trim() || !dateRegex.test(values.birthDate)) {
      newInvalidFields.birthDate = true;
      errors.push("Невірний формат дати (ДД.ММ.РРРР)");
    }

    if (!values.email.trim() || !emailRegex.test(values.email)) {
      newInvalidFields.email = true;
      errors.push("Невірний формат email");
    }

    setInvalidFields(newInvalidFields);
    
    if (errors.length > 0) {
      setSnackbar({
        open: true,
        message: errors.join(". "),
        severity: 'error'
      });
      return false;
    }
    
    return true;
  };

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
    setSnackbar({ open: false, message: '', severity: 'info' });

    if (!validateForm(details)) {
      setLoading(false);
      return { success: false };
    }

    try {
      const user = userUserFromLocalStorage();
      const userService = new UserService();
      
      // Convert date from DD.MM.YYYY to ISO format
      const [day, month, year] = details.birthDate.split('.');
      if (!day || !month || !year || isNaN(Date.parse(`${year}-${month}-${day}`))) {
        setSnackbar({
          open: true,
          message: 'Неправильний формат дати. Використовуйте формат ДД.ММ.РРРР',
          severity: 'error'
        });
        setInvalidFields(prev => ({ ...prev, birthDate: true }));
        setLoading(false);
        return { success: false };
      }

      await userService.updateDetails({
        userId: user.sub,
        fullName: details.fullName,
        email: details.email,
        phoneNumber: details.phoneNumber,
        birthDate: `${year}-${month}-${day}T00:00:00.000Z`
      });

      // Update local storage
      const updatedUser = {
        ...user,
        given_name: details.fullName,
        email: details.email,
        phone_number: details.phoneNumber,
        birthdate: details.birthDate
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));

      setSnackbar({
        open: true,
        message: 'Дані успішно оновлено',
        severity: 'success'
      });
      return { success: true };
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Помилка при оновленні даних',
        severity: 'error'
      });
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
    setInvalidFields({});
    setSnackbar({ open: false, message: '', severity: 'info' });
  };

  return {
    formValues,
    loading,
    invalidFields,
    snackbar,
    handleChange,
    updateUserDetails,
    resetForm,
    setSnackbar
  };
}; 