var head=document.createElement('h1')
head.innerText=" SK's Dine In"
document.body.appendChild(head).style.textAlign='center'

var hr=document.createElement('hr')
document.body.appendChild(hr)


// marquee

var marquee= document.createElement('MARQUEE')
var mar_text=document.createTextNode('Special - Pattar ka Gosh, Water')

marquee.appendChild(mar_text)
marquee.style.fontSize='x-large'
marquee.style.backgroundColor='yellow'
document.body.appendChild(marquee)


var table = document.createElement('TABLE');
table.setAttribute("id", 'myTable');
table.style.border = '1px solid black';  // Add border to the table
table.style.borderCollapse = 'collapse';  // Collapse borders
document.body.appendChild(table);

var tr = document.createElement('TR');
tr.setAttribute('id', 'myTR');
document.getElementById('myTable').appendChild(tr);

var veg = document.createTextNode('VEG Items');
var nonVeg = document.createTextNode("NON-VEG Items");

var td1 = document.createElement("TD");
td1.appendChild(veg);
td1.style.border = '1px solid black';  // Add border to the cell
document.getElementById('myTR').appendChild(td1);

// Veg menu list
var ul = document.createElement('UL');
ul.setAttribute('id', 'ul');
td1.appendChild(ul);

var li1 = document.createElement('LI');
var item1 = document.createTextNode('Paneer');
li1.appendChild(item1);
ul.appendChild(li1);

var li2 = document.createElement('LI');
var item2 = document.createTextNode('Rajma');
li2.appendChild(item2);
ul.appendChild(li2);

var li3 = document.createElement('LI');
var item3 = document.createTextNode('Roti');
li3.appendChild(item3);
ul.appendChild(li3);

var td2 = document.createElement("TD");
td2.appendChild(nonVeg);
td2.style.border = '1px solid black';  // Add border to the cell
tr.appendChild(td2); 

var ul1 = document.createElement('UL');
ul1.setAttribute('id', 'ul1');
td2.appendChild(ul1);

// Non-veg items
var item11 = document.createTextNode('Biryani');
var item21 = document.createTextNode('Mandi');
var item31 = document.createTextNode('Keema Balls');

var liNon1 = document.createElement('LI');
liNon1.appendChild(item11);
ul1.appendChild(liNon1);

var liNon2 = document.createElement('LI');
liNon2.appendChild(item21);
ul1.appendChild(liNon2);

var liNon3 = document.createElement('LI');
liNon3.appendChild(item31);
ul1.appendChild(liNon3);

//summary details

var details=document.createElement('DETAILS')
details.style.align='center'
document.body.appendChild(details)

var summary=document.createElement('SUMMARY')
var sum_txt= document.createTextNode('Special Items')
summary.appendChild(sum_txt)
details.appendChild(summary)

var img1= document.createElement('img')
img1.src='https://c.ndtvimg.com/2021-09/iukj2ebg_mutton_625x300_01_September_21.jpg'
img1.width=300
img1.height=300
details. appendChild(img1)

var img2= document.createElement('img')
img2.src='https://etimg.etb2bimg.com/photo/71616065.cms'
img2.width=300
img2.height=300
details. appendChild(img2)


//address
var address= document.createElement('div')
document.body.appendChild(address)

var address_h3=document.createElement('h3')
var h3=document.createTextNode('Address')
address.appendChild(h3)

var address_p=document.createElement('p')
var address_Ptxt= document.createTextNode('metro station, mig 214, Rd Number 1, behind kphb, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500072')

address_p.appendChild(address_Ptxt)
address.appendChild(address_p)


/* images 
var div= document.createElement('div')
var img1= document.createElement('img')
var img2=document.createElement('img')
img1.src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1'
img1.width=300;
img1.height=200



div.appendChild(img1)

img2.src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1'
img2.width=300;
img2.height=200
div.appendChild(img2)

div.style.textAlign='center'
document.body.appendChild(div)



-----------------table
var table = document.createElement('TABLE');
table.setAttribute("id", 'myTable');
table.style.border = '1px solid black';  // Add border to the table
table.style.borderCollapse = 'collapse';  // Collapse borders
document.body.appendChild(table);

var tr = document.createElement('TR');
tr.setAttribute('id', 'myTR');
document.getElementById('myTable').appendChild(tr);

var veg = document.createTextNode('VEG Items');
var nonVeg = document.createTextNode("NON-VEG Items");

var td1 = document.createElement("TD");
td1.appendChild(veg);
td1.style.border = '1px solid black';  // Add border to the cell
document.getElementById('myTR').appendChild(td1);

// Veg menu list
var ul = document.createElement('UL');
ul.setAttribute('id', 'ul');
td1.appendChild(ul);

var li1 = document.createElement('LI');
var item1 = document.createTextNode('Paneer');
li1.appendChild(item1);
ul.appendChild(li1);

var li2 = document.createElement('LI');
var item2 = document.createTextNode('Rajma');
li2.appendChild(item2);
ul.appendChild(li2);

var li3 = document.createElement('LI');
var item3 = document.createTextNode('Roti');
li3.appendChild(item3);
ul.appendChild(li3);

var td2 = document.createElement("TD");
td2.appendChild(nonVeg);
td2.style.border = '1px solid black';  // Add border to the cell
tr.appendChild(td2); 

var ul1 = document.createElement('UL');
ul1.setAttribute('id', 'ul1');
td2.appendChild(ul1);

// Non-veg items
var item11 = document.createTextNode('Biryani');
var item21 = document.createTextNode('Mandi');
var item31 = document.createTextNode('Keema Balls');

var liNon1 = document.createElement('LI');
liNon1.appendChild(item11);
ul1.appendChild(liNon1);

var liNon2 = document.createElement('LI');
liNon2.appendChild(item21);
ul1.appendChild(liNon2);

var liNon3 = document.createElement('LI');
liNon3.appendChild(item31);
ul1.appendChild(liNon3);

*/
