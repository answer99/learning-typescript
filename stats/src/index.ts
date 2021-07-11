import { MatchReader  } from "./MatchReader";
import { MatchResult } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReader";

const dataReader = new CsvFileReader('football.csv')
const reader = new MatchReader(dataReader);
reader.load();

let manUnitedWins = 0;

for(let match of reader.matches) {
  if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  }
  if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}
console.log(`Man United won ${manUnitedWins} games.`)
