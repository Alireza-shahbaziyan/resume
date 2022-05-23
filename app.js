// --------Write Name
var Name = "Alireza Shahbaziyan";
var nameItem = '';
var count = 0;
var nameId = document.getElementById('NameTitle');

 function write() {
    nameItem += Name[count];
    nameId.innerHTML = nameItem;
    count++;
    if (count >= Name.length) {
        clearInterval(myIntervalName);
    }
}

var myIntervalName =  setInterval(write, 100);
// ----------write Age
var myDate = new Date(2001, 07, 19);
var nowDate = new Date();
document.getElementById('age').innerHTML= +nowDate.getFullYear() - myDate.getFullYear();
