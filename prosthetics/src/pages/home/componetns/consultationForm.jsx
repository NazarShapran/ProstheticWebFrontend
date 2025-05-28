import React, { useState } from 'react';
import './consultationFormStyles.css';
import phoneIcon from '../../../assets/phone.svg';
import emailIcon from '../../../assets/email.svg';
import personIcon from '../../../assets/person-green.svg';

const ConsultationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add the logic to send the form data to your backend
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({
            fullName: '',
            email: '',
            phone: ''
        });
    };

    return (
        <section className="consultation-section">
            <div className="consultation-container">
                <div className="consultation-image-wrapper">
                    <img src="/images/consultationForm.jpg" alt="Consultation" className="consultation-image" />
                </div>
                <div className="consultation-content-form-wrapper">
                    <div className="consultation-content">
                        <h2>Не знаєш який протез обрати?</h2>
                        <p>Залиш заявку на консультацію, де наші спеціалісти проведуть обстеження та допоможуть обрати потрібний протез</p>
                        <div className="contact-info">
                            <a href="tel:+380322582111">
                                <img src={phoneIcon} alt="Phone" className="contact-icon" />
                                +380 (32) 258-21-11
                            </a>
                            <a href="mailto:info@prosthetics.com">
                                <img src={emailIcon} alt="Email" className="contact-icon" />
                                info@prosthetics.com
                            </a>
                        </div>
                    </div>
                    <form className="consultation-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <img src={personIcon} alt="Person" className="input-icon" />
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="ПІБ"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <img src={emailIcon} alt="Email" className="input-icon" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Електронна пошта"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <img src={phoneIcon} alt="Phone" className="input-icon" />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Номер телефону"
                                required
                            />
                        </div>
                        <button type="submit" className="submit-button">
                            Залишити заявку
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ConsultationForm; 