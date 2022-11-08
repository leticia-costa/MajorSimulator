import styled from "styled-components";
import bannerMajor from "../../assets/major.png";

export interface CardTeamProp {
  winner: boolean;
}

export const Header = styled.title`
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  margin-bottom: 2rem;
  background-image: url(${bannerMajor});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: ${({ theme }) => theme.color.text};
  text-shadow: 3px 5px 2px #474747;
  font-size: 4rem;
  font-weight: bold;
  .slide-top {
    animation: slide-top 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  @keyframes slide-top {
    0% {
      transform: translateY(-300px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
export const CardListRoundTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: 0 -1px 1px #fff, 0 -2px 8px #75a5bd, 0 -6px 16px #3d83a6,
    0 -10px 24px #0f77ab;
  color: ${({ theme }) => theme.color.text};
`;

export const CardList = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

export const CardMatchupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MatchupScore = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.white};
`;

export const CardMatchup = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.color.cardSelected};
  border-radius: 8px;
  padding: 0.5rem;
  gap: 0.3rem;
`;

export const CardTeam = styled.div<CardTeamProp>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 4rem;
  border-radius: 8px;

  background-color: ${({ theme, winner }) =>
    winner ? theme.color.cardSelected : theme.color.card};

  transition: 0.5s;
  :hover{
    cursor: pointer;
  }
`;
