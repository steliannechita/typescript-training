import { MatchData } from "../MatchData";
import { MatchResult } from "../Matchresult";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;
    for (let match of matches) {
      if (
        (match[1] === "Man United" && match[5] === MatchResult.HomeWin) ||
        (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
      ) {
        wins++;
      }
    }
    return `Team ${this.team} won ${wins}`;
  }
}