import { useState } from "react";
import { SignUpService } from "../service/signUpService";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (fullname, phoneNumber, email, password, birthDate) => {
    setError(null);
    setLoading(true);

    const controller = new AbortController();
    const signal = controller.signal;

    try {
      await SignUpService.signUp(
        fullname,
        phoneNumber,
        email,
        password,
        birthDate,
        signal
      );

      try {
        await SignUpService.autoLogin(email, password, signal);
        
        navigate('/');
        
        return { success: true };
      } catch (loginErr) {
        console.error('Помилка автоматичного входу:', loginErr);
        navigate('/signin');
        return { 
          success: false, 
          error: "Реєстрація успішна, але виникла помилка при автоматичному вході. Будь ласка, увійдіть вручну." 
        };
      }
    } catch (err) {
      console.error('Помилка реєстрації:', err);
      const errorMessage = err.response?.data?.message || "Помилка реєстрації. Спробуйте ще раз.";
      setError(errorMessage);
      return { 
        success: false, 
        error: errorMessage 
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    handleRegister,
  };
};