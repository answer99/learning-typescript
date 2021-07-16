import { MatchReader  } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";

const dataReader = new CsvFileReader('football.csv')
const reader = new MatchReader(dataReader);
reader.load();

const summary = new Summary(new WinsAnalysis('Fulham'), new HtmlReport())
summary.buildAndPrintReport(reader.matches)
