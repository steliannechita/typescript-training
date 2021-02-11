import { dateStringToDate } from "./utils";
import { MatchResult } from "./Matchresult";
import { MatchData } from "./MatchData";
import { CsvFileReader } from "./csvFileReader";

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          +row[3],
          +row[4],
          row[5] as MatchResult,
          row[6],
        ];
      }
    );
  }
}
