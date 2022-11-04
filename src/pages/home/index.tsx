import { useState} from 'react';
import { theme } from '../../theme'
import { GiAk47 } from "react-icons/gi";
import { teamsInitialList } from '../../utils/teams'
import { ThemeProvider } from 'styled-components'
import { Header, CardList, CardMatchup, CardListRoundTitle, CardTeam, CardMatchupContainer, MatchupScore } from './styles'

export function Home() {
  interface TeamProps {
    name: string,
    image: string,
    rank: number,
    matchupWinner: boolean
  }

  interface MatchupProps {
    winner: TeamProps,
    loser: TeamProps,
    qtyWins: number,
    qtyLoses: number
  }

  function sortAndMakeMatchups(teams: TeamProps[], qtyWins: number, qtyLoses: number) {
    teams.sort((team1, team2) => team1.rank > team2.rank ? 1 : -1)

    const matchups = []
    let index = 0
    while(matchups.length < teams.length/2) {
        matchups.push({
            winner: {...teams[index], matchupWinner: true},
            loser: {...teams[teams.length - index - 1], matchupWinner: false},
            qtyWins,
            qtyLoses
        })
        index++
    }

    return matchups
}

function createAListOfWinnersAndAListOfLosers(matchups: MatchupProps[]) {
  const winners: TeamProps[] = []
  const losers: TeamProps[] = []

  matchups.forEach((matchup) => {
      if(matchup.winner.matchupWinner) {
          winners.push(matchup.winner)
          losers.push(matchup.loser)
      } else {
          losers.push(matchup.winner)
          winners.push(matchup.loser)
      }
  })
  return [winners, losers]
}

  const [round1Matchups, setRound1Matchups] = useState(sortAndMakeMatchups(teamsInitialList, 0, 0))
  const [round1Winners, round1Losers] = createAListOfWinnersAndAListOfLosers(round1Matchups)

  const round2OneZeroMatchups = sortAndMakeMatchups(round1Winners, 1, 0)
  const round2ZeroOneMatchups = sortAndMakeMatchups(round1Losers, 0, 1)
  const round2Matchups = [...round2OneZeroMatchups, ...round2ZeroOneMatchups]

  const [round2OneZeroWinners, round2OneZeroLosers] = createAListOfWinnersAndAListOfLosers(round2OneZeroMatchups)
  const [round2ZeroOneWinners, round2ZeroOneLosers] = createAListOfWinnersAndAListOfLosers(round2ZeroOneMatchups)

  const round3TwoZeroMatchups = sortAndMakeMatchups(round2OneZeroWinners, 2, 0)
  const round3ZeroTwoMatchups = sortAndMakeMatchups(round2ZeroOneLosers, 0, 2)
  const round3OneOneMatchups = sortAndMakeMatchups([...round2ZeroOneWinners, ...round2OneZeroLosers], 1, 1)
  const round3Matchups = [...round3TwoZeroMatchups, ...round3OneOneMatchups, ...round3ZeroTwoMatchups]

  function handleClickWinnerTeam(teamName: string) {
    setRound1Matchups((matchups) => {
      const newMatchups = matchups.map((matchup) => {
        if(matchup.winner.name === teamName) {
          return {...matchup, winner: {...matchup.winner, matchupWinner: true}, loser: {...matchup.loser, matchupWinner: false}}
        } else if(matchup.loser.name === teamName) {
          return {...matchup, winner: {...matchup.winner, matchupWinner: false}, loser: {...matchup.loser, matchupWinner: true}}
        }
        return matchup
      })

      return newMatchups
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <h1>siMULAdor do Major</h1>
      </Header>

      <CardListRoundTitle>Round 1</CardListRoundTitle>
      <CardList>
      {round1Matchups.map((matchup) => {
        return (
          <CardMatchupContainer>
            <MatchupScore>{matchup.qtyWins} - {matchup.qtyLoses}</MatchupScore>
            <CardMatchup key={`${matchup.winner.name}x${matchup.loser.name}`}>
              <CardTeam winner={matchup.winner.matchupWinner} onClick={() => handleClickWinnerTeam(matchup.winner.name)}>
                <img src={matchup.winner.image} height="52px"/>
              </CardTeam>
              <GiAk47 size={32} color="#BFBFBF"/>
              <CardTeam winner={matchup.loser.matchupWinner} onClick={() => handleClickWinnerTeam(matchup.loser.name)}>
                <img src={matchup.loser.image} height="52px"/>
              </CardTeam>
            </CardMatchup>
          </CardMatchupContainer>
        )
      })}
      </CardList>

      <CardListRoundTitle>Round 2</CardListRoundTitle>
      <CardList>
      {round2Matchups.map((matchup) => {
        return (
          <CardMatchupContainer>
            <MatchupScore>{matchup.qtyWins} - {matchup.qtyLoses}</MatchupScore>
            <CardMatchup key={`${matchup.winner.name}x${matchup.loser.name}`}>
              <CardTeam winner={matchup.winner.matchupWinner} onClick={() => handleClickWinnerTeam(matchup.winner.name)}>
                <img src={matchup.winner.image} height="52px"/>
              </CardTeam>
              <GiAk47 size={32} color="#BFBFBF"/>
              <CardTeam winner={matchup.loser.matchupWinner} onClick={() => handleClickWinnerTeam(matchup.loser.name)}>
                <img src={matchup.loser.image} height="52px"/>
              </CardTeam>
            </CardMatchup>
          </CardMatchupContainer>
        )
      })}
      </CardList>
      
      <CardListRoundTitle>Round 3</CardListRoundTitle>
      <CardList>
      {round3Matchups.map((matchup) => {
        return (
          <CardMatchupContainer>
            <MatchupScore>{matchup.qtyWins} - {matchup.qtyLoses}</MatchupScore>
            <CardMatchup key={`${matchup.winner.name}x${matchup.loser.name}`}>
              <CardTeam winner={matchup.winner.matchupWinner} onClick={() => handleClickWinnerTeam(matchup.winner.name)}>
                <img src={matchup.winner.image} height="52px"/>
              </CardTeam>
              <GiAk47 size={32} color="#BFBFBF"/>
              <CardTeam winner={matchup.loser.matchupWinner} onClick={() => handleClickWinnerTeam(matchup.loser.name)}>
                <img src={matchup.loser.image} height="52px"/>
              </CardTeam>
            </CardMatchup>
          </CardMatchupContainer>
        )
      })}
      </CardList>
    </ThemeProvider>
  )
}


