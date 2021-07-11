import { CsvFileReader } from "./CsvFileReader";
import { dataStringToDate } from './utils';
import { MatchResult } from './MatchResult';

//tuple definetion
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dataStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, // Type Assertions,
      // tell Typescript to consoder row[5] as one of the possible values out of that enum
      row[6]
    ];
  }
}