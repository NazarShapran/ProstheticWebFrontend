import React from 'react'
import './signInStyles.css'

export default function SignInPage() {
  return (
    <div className="sign-in-page">
      <div className="sign-in-form-container">
        <h1>Вхід до кабінету</h1>
        <form className='sign-in-form'>
          <label>
            Логін
            <input type="email" placeholder="Введіть електронну пошту" />
          </label>
          <label>
            Пароль
            <input type="password" placeholder="Введіть пароль до кабінету" />
          </label>
          <button type="submit">Ввійти</button>
        </form>
        <p className="sign-in-note">Не зареєстровані? <a href="/singUp">Зробіть це зараз</a></p>
      </div>
    </div>
  )
}