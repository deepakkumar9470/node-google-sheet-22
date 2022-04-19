const XLSX = require('xlsx')

const sheetdatas = require('./sheetData.json')

const convertToExcel = () =>{
    const worksheet = XLSX.utils.json_to_sheet(sheetdatas)
    const workbook =  XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook,worksheet,'users')

    XLSX.write(workbook, {bookType : 'xlsx', type : 'buffer'})
    XLSX.write(workbook, {bookType : 'xlsx', type : 'binary'})

    XLSX.writeFile(workbook, 'google-sheet.xlsx')
}

convertToExcel()