import React, { useState } from "react";
import TrashIcon from "../../../assets/trash.svg?react";

const DeleteAccount = ({ onDelete }) => {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="profile-section delete-account">
      <div className="profile-section-header">
        <h3>Видалити ваш акаунт</h3>
        <div className="button-group">
          <button
            onClick={onDelete}
            disabled={!confirmed}
            className="delete-btn"
          >
            <TrashIcon />
            Видалити
          </button>
        </div>
      </div>
      <div className="profile-section-delete-content">
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
    </div>
  );
};

export default DeleteAccount;
