function groupEvery5RowsIntoRows() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getRange("A1:A").getValues().flat().filter(x => x !== "");
  const chunkSize = 4;
  const output = [];

  for (let i = 0; i < data.length; i += chunkSize) {
    let chunk = data.slice(i, i + chunkSize);
    
    // If chunk has less than 5 items, fill with blanks to make all rows equal length
    while (chunk.length < chunkSize) {
      chunk.push("");
    }

    output.push(chunk);
  }

  // Output starting at column B (column 2), row 1
  sheet.getRange(1, 2, output.length, chunkSize).setValues(output);
}
