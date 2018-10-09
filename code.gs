function onOpen() {
    var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets()
    for (var i in sheets) {
        sheets[i].getDataRange().setFontFamily("Open Sans").setFontSize(10)
    }
}
