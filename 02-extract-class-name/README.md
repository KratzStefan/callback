## Extract Class Name

- First `parameter` is a string
- When the string contains the folling word pattern`Class YEAR MONTH_NAME` (e. g. Class 2023 August)
  - Then return a new string with the year, an `-` as seperator and followed by the month converted to a number e. g. `Class 2022 September > 2023-09`
  - Else return null
- The month name could contain german umlauts or the alternative version. Both are valid. e. g. `Class 2022 März > 2023-03` === `Class 2022 Maerz > 2023-03`

- Der erste „Parameter“ ist eine Zeichenkette.
- Wenn der String das folgende Wortmuster `Klasse JAHR MONAT_NAME` enthält (z. B. Klasse 2023 August)
  - Dann wird eine neue Zeichenkette mit dem Jahr, einem `-` als Trennzeichen und dem Monat, der in eine Zahl umgewandelt wird, zurückgegeben, z. B. `Klasse 2022 September > 2023-09`
  - Andernfalls wird null zurückgegeben.
- Der Monatsname kann deutsche Umlaute oder die alternative Version enthalten. Beide sind gültig. z. B. `Klasse 2022 März > 2023-03` === `Klasse 2022 Maerz > 2023-03`

Übersetzt mit DeepL.com (kostenlose Version)

### Extract Class Name Example

```js
console.log(extractClassName("Live-Session Class 2022 September")); // "2022-09"

console.log(extractClassName("Live-Session Class 2022 März")); // "2022-03"

console.log(extractClassName("Live-Session Class 2022 Maerz")); // "2022-03"

console.log(extractClassName("Live-Session 2022 April")); // null
```
