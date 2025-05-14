import React, { useState } from 'react';
import { useCreateReview } from '../hooks/useCreateReview';
import { userUserFromLocalStorage } from '../../profile/hooks/userUserFromLocalStorage';
import '../styles/ReviewForm.css';

const ReviewForm = ({ prostheticId, onSubmit }) => {
  const [formData, setFormData] = useState({
    description: '',
    pros: '',
    cons: ''
  });

  const { createReview, loading, error: createError } = useCreateReview();
  const user = userUserFromLocalStorage();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user?.sub) {
      console.error('User not logged in');
      return;
    }

    try {
      await createReview({
        prostheticId,
        userId: user.sub,
        ...formData
      });
      
      // Reset form after successful submission
      setFormData({
        description: '',
        pros: '',
        cons: ''
      });
      
      // Call the parent's onSubmit for any additional handling (like refetching reviews)
      if (onSubmit) {
        await onSubmit();
      }
    } catch (err) {
      console.error('Failed to submit review:', err);
    }
  };

  if (!user?.sub) {
    return (
      <div className="review-form-container">
        <p>Будь ласка, увійдіть в систему, щоб залишити відгук</p>
      </div>
    );
  }

  return (
    <div className="review-form-container">
      <h3>Залишити відгук</h3>
      {createError && <div className="review-form-error">{createError}</div>}
      
      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-group">
          <label htmlFor="description">Ваш відгук*</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Опишіть ваш досвід використання протезу..."
            rows={4}
          />
        </div>

        <div className="form-group">
          <label htmlFor="pros">Переваги</label>
          <textarea
            id="pros"
            name="pros"
            value={formData.pros}
            onChange={handleChange}
            placeholder="Що вам сподобалось?"
            rows={3}
          />
        </div>

        <div className="form-group">
          <label htmlFor="cons">Недоліки</label>
          <textarea
            id="cons"
            name="cons"
            value={formData.cons}
            onChange={handleChange}
            placeholder="Що можна покращити?"
            rows={3}
          />
        </div>

        <button 
          type="submit" 
          className="submit-review-button"
          disabled={loading || !formData.description.trim()}
        >
          {loading ? 'Додавання...' : 'Додати відгук'}
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
