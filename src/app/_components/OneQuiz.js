import { useState } from 'react';

const OneQuiz = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('B'); // correct answer is option B
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setShowFeedback(true);
  };

  const getFeedbackIcon = () => {
    if (selectedOption === correctAnswer) {
      return <span style={{ color: 'green' }}>&#10004;</span>; // green tick
    } else {
      return <span style={{ color: 'red' }}>&#10008;</span>; // red cross
    }
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
        <option value="C">Option C</option>
        <option value="D">Option D</option>
      </select>
      {showFeedback && getFeedbackIcon()}
    </div>
  );
};

export default OneQuiz;