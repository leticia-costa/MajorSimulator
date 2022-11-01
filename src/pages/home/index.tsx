import { useState} from 'react';
import { theme } from '../../theme'
import { GiAk47 } from "react-icons/gi";
import { teamsObject } from '../../utils/teams'
import { ThemeProvider } from 'styled-components'
import { Header, CardList, CardMatchup, CardListRoundTitle, CardTeam } from './styles'

export function Home() {
  type matchupType = {
    name: string,
    image: string,
    winner: boolean
  }

  let matchups: matchupType[][] = [
    [teamsObject.og, teamsObject.grayhound],
    [teamsObject.vitality, teamsObject.imperial],
    [teamsObject.eg, teamsObject.ihc],
    [teamsObject.cloud9, teamsObject.fnatic],
    [teamsObject.big, teamsObject.furia],
    [teamsObject.bne, teamsObject.zerozero],
    [teamsObject.mouz, teamsObject.outsiders],
    [teamsObject.novez, teamsObject.gamerlegion]
  ]

  matchups.forEach((teams) => teams[0].winner = true)

  const [matchupState, setMatchupState] = useState(matchups)

  function handleClickWinnerTeam(teamName: string) {
    setMatchupState((curState) => {
      const newMatchupState = curState.map((teamsMatchup) => {
        if(teamsMatchup[0].name === teamName) {
          const updatedWinnerMatchup = {
            ...teamsMatchup[0],
            winner: true
          }
          const updatedLoserMatchup = {
            ...teamsMatchup[1],
            winner: false
          }
          return [updatedWinnerMatchup, updatedLoserMatchup]

        } else if(teamsMatchup[1].name === teamName) {
          const updatedWinnerMatchup = {
            ...teamsMatchup[0],
            winner: false
          }
          const updatedLoserMatchup = {
            ...teamsMatchup[1],
            winner: true
          }
          return [updatedWinnerMatchup, updatedLoserMatchup]
        }
        return teamsMatchup
      })

      return newMatchupState
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <h1>Major Simulator</h1>
      </Header>

      <CardListRoundTitle>Round 1</CardListRoundTitle>
      <CardList>
      {matchupState.map((teams) => {
        return (
          <CardMatchup key={`${teams[0].name}x${teams[1].name}`}>
            <CardTeam winner={teams[0].winner} onClick={() => handleClickWinnerTeam(teams[0].name)}>
              <img src={teams[0].image} />
            </CardTeam>
            <GiAk47 size={32} color="#BFBFBF"/>
            <CardTeam winner={teams[1].winner} onClick={() => handleClickWinnerTeam(teams[1].name)}>
              <img src={teams[1].image} height="52px"/>
            </CardTeam>
          </CardMatchup>
        )
      })}
      </CardList>
    </ThemeProvider>
  )
}


