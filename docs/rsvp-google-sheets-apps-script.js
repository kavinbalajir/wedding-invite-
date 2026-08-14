const SPREADSHEET_ID = 1ePXQi7ZEviYgmrxOeiER4FT6Es7Ek9QUUuNYlZt1dhg
const SHEET_NAME = 'Sheet1'

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ ok: true, message: 'Wedding RSVP endpoint is ready.' }),
  ).setMimeType(ContentService.MimeType.JSON)
}

function doPost(event) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME)
  const data = event.parameter

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Submitted at', 'Name', 'Phone number'])
  }

  sheet.appendRow([
    new Date(),
    data.name || '',
    data.phone || '',
  ])

  return ContentService.createTextOutput(
    JSON.stringify({ ok: true }),
  ).setMimeType(ContentService.MimeType.JSON)
}
