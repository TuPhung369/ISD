// 08.loop_warm_up_5.js JavasScript code
document.write("<table>");//showing the table in HTML format

// Task 1 (easy): Modify the JavaScript code so that it shows a multiplication table 1-9 by 1-9. 
document.write("<tr>");//table row -> row is created using the <tr> tag. 
document.write("<td>*</td>");//First cell - The asterisk (*) to show multiplication operation.
for (var i = 1; i <= 9; i++) {
    document.write("<td>" + i + "</td>")// write the first Row
}
document.write("</tr>");

for (var y = 1; y <= 9; y++) {//Y=1 => 2nd row....
    document.write("<tr>");
    document.write("<td>" + y + "</td>");//write the cell with position 10
    for (var x = 1; x <= 9; x++) {//write the 2nd row
        document.write("<td>" + (y * x) + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");//showing the table in HTML format
document.write("<br>");//Break

// Modify the JavaScript code again so that it shows a multiplication table 5-10 by 5-10. 
document.write("<table>");//Format HTML
document.write("<tr>");//table row
document.write("<td>*</td>");//first cell 0
for (var i = 5; i <= 10; i++) {//first row
    document.write("<td>" + i + "</td>");
}
document.write("</tr>");

for (var y = 5; y <= 10; y++) {//Y=5 => 2nd row
    document.write("<tr>");//table row
    document.write("<td>" + y + "</td>");//2nd cell 10
    for (var x = 5; x <= 10; x++) {//2nd row 1x
        document.write("<td>" + (y * x) + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");