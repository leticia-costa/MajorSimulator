import styled from "styled-components";

export interface CardTeamProp {
    winner: boolean
}

export const Header = styled.title`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    margin-bottom: 2rem;

    color: ${({theme}) => theme.color.text};
    font-size: 4rem;
    font-weight: bold;
`
export const CardListRoundTitle = styled.h2`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;

    color: ${({theme}) => theme.color.text};
`

export const CardList = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
`

export const CardMatchupContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MatchupScore = styled.span`
    font-size: 1.5rem;
    color: ${({theme}) => theme.color.white};
`

export const CardMatchup = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid ${({theme}) => theme.color.cardSelected};
    border-radius: 8px;
    padding: 0.5rem;
    gap: 0.3rem;
`

export const CardTeam = styled.div<CardTeamProp>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 4rem;
    border-radius: 8px;

    background-color: ${({theme, winner}) => winner? theme.color.cardSelected : theme.color.card};
`