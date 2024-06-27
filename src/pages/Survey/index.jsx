import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/Loader';
import { SurveyContext } from '../../utils/context';

import { useFetch } from '../../utils/hooks';

const SurveyContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 100px 25px 0;
  background-color: ${colors.section};
`;

const Navigate = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

const Question = styled.p`
  font-weight: 600;
  font-size: 16px;
`;

const ReplyWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`;

function Survey() {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const prevQuestionNumber =
    questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const nextQuestionNumber = questionNumberInt + 1;

  const { answers, saveAnswers } = useContext(SurveyContext);

  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer });
  }

  const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`);
  const { surveyData } = data;

  if (error) {
    return (
      <SurveyContainer>
        <span>🛠️ Oups... ça coince quelque part 🔧</span>
      </SurveyContainer>
    );
  }

  return (
    <SurveyContainer>
      <h1>Question {questionNumber}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <Question>{surveyData && surveyData[questionNumberInt]}</Question>
      )}
      <ReplyWrapper>
        <ReplyBox
          onClick={() => saveReply(true)}
          isSelected={answers[questionNumber] === true}
        >
          Oui
        </ReplyBox>
        <ReplyBox
          onClick={() => saveReply(false)}
          isSelected={answers[questionNumber] === false}
        >
          Oui
        </ReplyBox>
      </ReplyWrapper>
      <Navigate>
        <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
        {surveyData && surveyData[questionNumberInt + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </Navigate>
    </SurveyContainer>
  );
}

export default Survey;
