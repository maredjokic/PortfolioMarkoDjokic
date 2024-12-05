"use client"

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import he from 'he';

interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface QuizProps {
  amount: number;
}

const Quiz: React.FC<QuizProps> = ({ amount }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);
  const [userAnswer, setUserAnswer] = useState<string | null>(null);

  useEffect(() => {
    // Učitaj pitanja sa API-ja
    fetch(`https://opentdb.com/api.php?amount=${amount}&type=multiple`)
      .then((response) => response.json())
      .then((data) => setQuestions(data.results));
  }, [amount]);

  const handleAnswerClick = (answer: string) => {
    if (isAnswered) return; // Ne dozvoljava ponovno klikanje

    setUserAnswer(answer);
    setCorrectAnswer(questions[currentQuestionIndex].correct_answer);
    setIsAnswered(true);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setIsAnswered(false);
    setUserAnswer(null);
    setCorrectAnswer(null);
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const options = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort();

  return (
    <div style={styles.quizContainer}>
      <div style={styles.question}>
        <h2>{he.decode(currentQuestion.question)}</h2>
      </div>
      <div style={styles.answers}>
        {options.map((answer, index) => {
          const isCorrect = answer === correctAnswer;
          const isSelected = answer === userAnswer;
          const buttonClass = isAnswered
            ? isCorrect
              ? 'correct'
              : isSelected
              ? 'incorrect'
              : ''
            : '';

          return (
            <button
              key={index}
              onClick={() => handleAnswerClick(answer)}
              style={{
                ...styles.answerButton,
                ...(buttonClass === 'correct' ? styles.correct : {}),
                ...(buttonClass === 'incorrect' ? styles.incorrect : {}),
              }}
              disabled={isAnswered}
            >
              {he.decode(answer)}
            </button>
          );
        })}
      </div>
      {isAnswered && currentQuestionIndex < questions.length - 1 && (
        <button onClick={nextQuestion} style={styles.nextQuestion}>Next Question</button>
      )}
      {currentQuestionIndex === questions.length - 1 && isAnswered && (
        <div style={styles.quizEnd}>You've completed the quiz!</div>
      )}
    </div>
  );
};

// Definisanje PropTypes za komponentu
Quiz.propTypes = {
  amount: PropTypes.number.isRequired,
};

// Inline stilovi
const styles = {
  quizContainer: {
    textAlign: 'center' as const,
    maxWidth: '600px',
    margin: '0 auto',
  },
  question: {
    fontSize: '1.5em',
    marginBottom: '20px',
  },
  answers: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
  },
  answerButton: {
    width: '100%',
    padding: '15px',
    margin: '10px 0',
    fontSize: '1.2em',
    cursor: 'pointer' as const,
    transition: 'background-color 0.3s',
  },
  correct: {
    backgroundColor: 'green',
    color: 'white',
  },
  incorrect: {
    backgroundColor: 'red',
    color: 'white',
  },
  nextQuestion: {
    padding: '10px 20px',
    fontSize: '1.2em',
    cursor: 'pointer' as const,
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
  },
  quizEnd: {
    fontSize: '1.5em',
    marginTop: '20px',
  },
};

export default Quiz;