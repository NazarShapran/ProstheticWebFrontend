import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { userUserFromLocalStorage } from "../profile/hooks/userUserFromLocalStorage";
import { useFormatDateForInput } from "./hooks/useFormatDateForInput";
import { useGetAllProsthetics } from "../catalog/hooks/useGetAllProsthetics";
import { useCreateRequest } from "./hooks/useCreateRequest";
import "./FormStyles.css";

export default function FormPage() {
  const location = useLocation();
  const selectedProstheticId = location.state?.selectedProstheticId || "";
  
  const [prosthesis, setProsthesis] = useState(selectedProstheticId);
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const user = userUserFromLocalStorage();
  const formatDateForInput = useFormatDateForInput();
  const {
    prosthetics,
    loading: prostheticsLoading,
    error: prostheticsError,
  } = useGetAllProsthetics(true); 
  const {
    createRequest,
    loading: requestLoading,
    error: requestError,
  } = useCreateRequest();

  // Update prosthesis state when selectedProstheticId changes
  useEffect(() => {
    if (selectedProstheticId) {
      setProsthesis(selectedProstheticId);
    }
  }, [selectedProstheticId]);

  const fullName = user?.given_name || "";
  const phoneNumber = user?.phone_number || "";
  const email = user?.email || "";
  const birthDate = formatDateForInput(user?.birthdate);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!user?.sub || !prosthesis || !description) {
      alert("Будь ласка, заповніть всі обов'язкові поля.");
      return;
    }

    try {
      await createRequest({
        userId: user.sub,
        prostheticId: prosthesis,
        description: description,
      });

      setSuccessMessage("Заявку успішно створено!");
      setDescription("");
      setProsthesis("");
    } catch (error) {
      console.error("Не вдалося створити заявку", error);
    }
  };

  return (
    <div className="form-page-form-page">
      <div className="form-page-form-container">
        <h1>Оформлення заявки</h1>
        <p className="form-page-subheading">
          Перевірте ваші дані та змініть її при потребі в кабінеті користувача
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-page-display-info">
            <p>
              <strong>ПІБ:</strong> {fullName}
            </p>
            <p>
              <strong>Телефон:</strong> {phoneNumber}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Дата народження:</strong> {birthDate}
            </p>
          </div>

          <h4>Оберіть потрібний протез</h4>
          <div className="form-page-input-wrapper">
            {prostheticsLoading ? (
              <p>Завантаження протезів...</p>
            ) : prostheticsError ? (
              <p>Помилка при завантаженні протезів</p>
            ) : (
              <select
                value={prosthesis}
                onChange={(e) => setProsthesis(e.target.value)}
                required
              >
                <option value="">Оберіть протез</option>
                {prosthetics.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.title}
                  </option>
                ))}
              </select>
            )}
          </div>

          <hr className="form-page-divider" />
          <h4>Опис вашої ситуації</h4>
          <p className="form-page-subheading">
            Коротко опишіть свою ситуацію. Це необхідно для того, щоб простіше
            було виявити шахраїв.
          </p>
          <div className="form-page-input-wrapper">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Опишіть свою ситуацію"
              required
            />
          </div>

          <div className="form-page-button-group">
            <button
              className="form-page-button"
              type="submit"
              disabled={requestLoading}
            >
              {requestLoading ? "Відправка..." : "Залишити заявку"}
            </button>
          </div>

          {requestError && (
            <p className="form-page-error">Помилка: {requestError}</p>
          )}

          {successMessage && (
            <p className="form-page-success">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}
