import PropTypes from 'prop-types';
import DefaultPicture from '../../assets/profile.png';
import styled from 'styled-components';
import colors from '../../utils/style/colors.js';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  background-color: ${colors.section};
  border-radius: 30px;
  width: 350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
`;

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  align-self: center;
`;

const CardName = styled.span`
  font-weight: bold;
  font-size: 22px;
  align-self: center;
`;

function Card({ job = '', name = '', picture = DefaultPicture }) {
  return (
    <CardWrapper>
      <CardLabel>{job}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardName>{name}</CardName>
    </CardWrapper>
  );
}

Card.propTypes = {
  job: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired
};

export default Card;
