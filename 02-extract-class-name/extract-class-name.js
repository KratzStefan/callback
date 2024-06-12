function extractClassName(input) {
  // Definiere eine Zuordnungstabelle für Monatsnamen mit möglichen Umlauten und deren entsprechenden Monatsnummern
  const monthMap = {
    Januar: "01",
    Februar: "02",
    März: "03",
    Maerz: "03",
    April: "04",
    Mai: "05",
    Juni: "06",
    Juli: "07",
    August: "08",
    September: "09",
    Oktober: "10",
    November: "11",
    Dezember: "12",
  };

  // Regulärer Ausdruck, um das Muster "Class YEAR MONTH_NAME" zu erkennen
  const pattern = /Class\s(\d{4})\s([a-zA-ZäöüÄÖÜß]+)$/;

  // Teste den Eingabestring gegen das Muster
  const match = input.match(pattern);

  // Wenn das Muster nicht übereinstimmt, gib null zurück
  if (!match) {
    return null;
  }

  // Extrahiere das Jahr und den Monatsnamen aus dem Match-Ergebnis
  const year = match[1];
  const monthName = match[2];

  // Wandle den Monatsnamen in eine Monatsnummer unter Verwendung der monthMap um
  const monthNumber = monthMap[monthName];

  // Wenn der Monatsname nicht in der monthMap ist, gib null zurück
  if (!monthNumber) {
    return null;
  }

  // Gib den formatierten String im Format "YEAR-MONTH_NUMBER" zurück
  return `${year}-${monthNumber}`;
}
