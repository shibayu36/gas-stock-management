const sheet = SpreadsheetApp.getActiveSheet();

function countUpStock(): void {
  const rowIndex = sheet.getActiveCell().getRowIndex();
  const stockCountCell = sheet.getRange(`B${rowIndex}`);
  stockCountCell.setValue(stockCountCell.getValue() + 1);
}

function countDownStock(): void {
  const rowIndex = sheet.getActiveCell().getRowIndex();
  const stockCountCell = sheet.getRange(`B${rowIndex}`);
  stockCountCell.setValue(stockCountCell.getValue() - 1);
}
