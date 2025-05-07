import React, { useState } from 'react';
import { firestore } from '../../firebase'; // assuming Firebase is initialized in this file

const FeedbackForm: React.FC = () => {
  // State variables
  const [rating, setRating] = useState<number>(0);
  const [featuresUsed, setFeaturesUsed] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string>('');
  const [reviewText, setReviewText] = useState<string>('');

  // Handle Star Rating
  const handleStarRating = (star: number) => {
    setRating(star);
  };

  // Handle Multiple-Choice Questions
  const handleFeatureChange = (feature: string, checked: boolean) => {
    if (checked) {
      setFeaturesUsed((prev) => [...prev, feature]);
    } else {
      setFeaturesUsed((prev) => prev.filter((f) => f !== feature));
    }
  };

  // Handle Suggestions for Improvement
  const handleSuggestionsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSuggestions(e.target.value);
  };

  // Handle Write a Review
  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(e.target.value);
  };

  // Submit Feedback
  const handleSubmit = async () => {
    const feedbackData = {
      rating,
      featuresUsed,
      suggestions,
      reviewText,
    };

    try {
      await firestore.collection('feedback').add(feedbackData);
      alert('Feedback submitted successfully!');
    } catch (error) {
      console.error('Error submitting feedback: ', error);
    }
  };

  return (
    <div>
      <h1>Sara AI Feedback</h1>

      {/* Star Rating */}
      <section id="star-rating">
        <h2>Rate Sara AI:</h2>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} onClick={() => handleStarRating(star)}>
              {star <= rating ? '⭐' : '☆'}
            </span>
          ))}
        </div>
        <p>Your Rating: <span>{rating}</span></p>
      </section>

      {/* Multiple-Choice Questions */}
      <section id="multiple-choice">
        <h2>What features do you use most?</h2>
        <label>
          <input
            type="checkbox"
            onChange={(e) => handleFeatureChange('Chat Assistance', e.target.checked)}
          />
          Chat Assistance
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={(e) => handleFeatureChange('Summarization', e.target.checked)}
          />
          Summarization
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={(e) => handleFeatureChange('Health Tips', e.target.checked)}
          />
          Health Tips
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={(e) => handleFeatureChange('Personalized Content', e.target.checked)}
          />
          Personalized Content
        </label>
      </section>

      {/* Suggestions for Improvements */}
      <section id="suggestions">
        <h2>Suggestions for Improvements:</h2>
        <textarea
          id="suggestions-text"
          placeholder="Write your suggestions here"
          value={suggestions}
          onChange={handleSuggestionsChange}
        />
      </section>

      {/* Write a Review */}
      <section id="review">
        <h2>Write a Review:</h2>
        <textarea
          id="review-text"
          placeholder="Write your review here"
          value={reviewText}
          onChange={handleReviewChange}
        />
      </section>

      <button onClick={handleSubmit}>Submit Feedback</button>
    </div>
  );
};

export default FeedbackForm;