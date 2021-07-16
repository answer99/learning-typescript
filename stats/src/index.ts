import { MatchReader  } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";

const dataReader = new CsvFileReader('football.csv')
const reader = new MatchReader(dataReader);
reader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Huddersfield');
summary.buildAndPrintReport(reader.matches)
