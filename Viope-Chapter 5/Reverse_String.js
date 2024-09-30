// TODO: JavaScript code
text = 'olleH dlroW';// text.length <=> 11
let text_out = '';
for (let i = text.length-1 ; i>=0; i--) { // run (from text.length-1 to 0)
    
    if (i == 5){
        continue; // skip below lines and jump to next line
    }
    if (i == 1){
        break; // exit out of loop => end of loop.
    }

    text_out += text.charAt(i);
    console.log(i + ": " + text_out);//show on console
    document.write(i +  ": " + text_out + "<br>");//show on webpage
}