import React, { useState } from "react";

const DeleteAccount = ({ onDelete }) => {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="profile-section delete-account">
      <div className="delete-account-content">
        <h3>Видалити ваш акаунт</h3>
        <p>
          Коли ви видалите свій обліковий запис, ви втрачаєте доступ до
          особистого кабінету, і ми назавжди видалимо ваш персональний дані.
        </p>
          <label>
            <input 
              type="checkbox"
              checked={confirmed}
              onChange={() => setConfirmed(!confirmed)}
            />
            Підтвердити, що я хочу видалити свій обліковий запис
          </label>
      </div>
      <div className="button-group" style={{ justifyContent: "flex-end" }}>
        <button onClick={onDelete} disabled={!confirmed} className="delete-btn">
          Видалити
        </button>
      </div>
    </div>
  );
};

export default DeleteAccount;
