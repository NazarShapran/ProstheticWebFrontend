import React, { useState } from "react";

const DeleteAccount = ({ onDelete }) => {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="profile-section delete-account">
      <h3>Видалити акаунт</h3>
      <p>Увага! Видалення акаунту є незворотнім. Ви впевнені?</p>
      <label>
        <input
          type="checkbox"
          checked={confirmed}
          onChange={() => setConfirmed(!confirmed)}
        />
        Підтверджую видалення акаунту
      </label>
      <button onClick={onDelete} disabled={!confirmed}>Видалити</button>
    </div>
  );
};

export default DeleteAccount;
