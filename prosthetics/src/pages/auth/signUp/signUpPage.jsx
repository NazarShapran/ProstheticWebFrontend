import React, { useState } from "react";
import {
  Email,
  Key,
  Person,
  Phone,
  CalendarToday,
  ArrowCircleDown,
} from "@mui/icons-material";
import { useSignUp } from "../signUp/hooks/useSignUp";
import "./signUpStyles.css";

export default function SignUpPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    birthDate: "",
  });

  const { handleRegister, loading, error } = useSignUp();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister(
      formData.name,
      formData.phone,
      formData.email,
      formData.password,
      formData.birthDate
    );
  };

  return (
    <div className="sign-up-page">
      <div className="sign-up-form-container">
        {(step === 2 || step === 3) && (
          <button
            type="button"
            onClick={handleBack}
            className="back-icon-button"
          >
            <ArrowCircleDown className="rotated-icon" />
          </button>
        )}
        <h1>Реєстрація</h1>
        <div className="step-progress">
          {/* Step 1 */}
          <div className="step">
            <div className="step-container">
              <div className="circle-outer">
                <div
                  className={`circle-inner ${step > 1 ? "done" : "pending"}`}
                >
                  <span className="checkmark">✔</span>
                </div>
              </div>
              <div className={`line ${step >= 2 ? "active" : ""}`}></div>
            </div>
            <div className="step-text">
              <p className="step-text-title">Крок 1</p>
              <p className="step-text-info">Логін та пароль</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="step">
            <div className="step-container">
              <div className="circle-outer">
                <div
                  className={`circle-inner ${step === 3 ? "done" : "pending"}`}
                >
                  <span className="checkmark">✔</span>
                </div>
              </div>
              <div className={`line ${step >= 3 ? "active" : ""}`}></div>
            </div>
            <div className="step-text">
              <p className="step-text-title">Крок 2</p>
              <p className="step-text-info">Особиста інформація</p>
            </div>
          </div>
        </div>

        {step === 1 ? (
          <form className="sign-up-form" onSubmit={handleNext}>
            <div className="input-group">
              <div className="input">
                <Email className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Введіть електронну пошту"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input">
                <Key className="input-icon" />
                <input
                  type="password"
                  name="password"
                  placeholder="Введіть пароль до кабінету"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button type="submit">Далі</button>
          </form>
        ) : (
          <form className="sign-up-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input">
                <Person className="input-icon" />
                <input
                  type="text"
                  name="name"
                  placeholder="Введіть ПІБ"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input">
                <Phone className="input-icon" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Введіть номер телефону"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input">
                <CalendarToday className="input-icon" />
                <input
                  type="date"
                  name="birthDate"
                  placeholder="Введіть дату народження"
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button type="submit" disabled={loading}>
              {loading ? "Реєстрація..." : "Зареєструватися"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        )}
        <p className="sign-up-note">
          Вже маєте кабінет? <a href="/signIn">Увійти зараз</a>
        </p>
      </div>
    </div>
  );
}
