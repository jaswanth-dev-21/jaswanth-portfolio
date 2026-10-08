   const ADMIN_KEY = "Jaswanth";

   function doPost(e) {
     const d = JSON.parse(e.postData.contents);
     SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
       .appendRow([d.name, d.email, d.message, d.timestamp]);
     return ContentService.createTextOutput("ok");
   }

   function doGet(e) {
     const json = (o) => ContentService.createTextOutput(JSON.stringify(o))
       .setMimeType(ContentService.MimeType.JSON);
     if (!e.parameter || e.parameter.key !== ADMIN_KEY) return json([]);
     const rows = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
       .getDataRange().getValues().slice(1);
     return json(rows.map((r) => ({
       name: r[0], email: r[1], message: r[2], timestamp: String(r[3]),
     })));
   }