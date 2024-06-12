# Kata: Filter API Data

Implement the `filterApiData` function in `filter-api-data.js` with the following requirements in mind.

- The first parameter `apiData` will be an array that includes objects
- The objects can have different keys
- The second parameter `mandatoryKeys` is a array that includes all keys that an object (from the `apiData` array) should have to pass the filter test
- Return an array with only the objects that include all keys from the `mandatoryKeys` array

Implementieren Sie die Funktion „filterApiData“ in „filter-api-data.js“ unter Berücksichtigung der folgenden Anforderungen.

- Der erste Parameter `apiData` wird ein Array sein, das Objekte enthält
- Die Objekte können unterschiedliche Schlüssel haben
- Der zweite Parameter `mandatoryKeys` ist ein Array, das alle Schlüssel enthält, die ein Objekt (aus dem `apiData` Array) haben sollte, um den Filtertest zu bestehen
- Gibt ein Array mit nur den Objekten zurück, die alle Schlüssel aus dem `mandatoryKeys` Array enthalten3`

## Filter Api Data Examples

```js
const data = [{ id: 1, price: 100 }, { price: 50 }];

const filteredData = filterApiData(data, ["id"]);

console.log(filteredData); // [{id: 1, price: 100}]
```

```js
const data = [
  { id: 1, price: 100 },
  { id: 2, title: "" },
  { id: 3, price: 50 },
];

const filteredData = filterApiData(data, ["id", "price"]);

console.log(filteredData); // [{ id: 1, price: 100 }, { id:3, price: 50}]
```
