var h1=document.createElement('h1')
var h1_text=document.createTextNode('SUKUMAR')
h1.appendChild(h1_text)
document.body.appendChild(h1).style.textAlign='center'

//my image
var myimage=document.createElement('img')
myimage.src='./svk1.jpg'
myimage.width=80
myimage.height=80
document.body.appendChild(myimage).style.position='absolute'



//career objective
var h3=document.createElement('h3')
var career=document.createTextNode('Career Objective')
h3.appendChild(career)
document.body.appendChild(h3)

var hr=document.createElement('hr')
document.body.appendChild(hr)

var career_p=document.createElement('p')
var career_Ptext=document.createTextNode('lorem kvvdjvnljdnfnfkjl nfdnfjfnfjdnkljadnknndnd n vnjdsfbrifnugrengjrniurheng')
career_p.appendChild(career_Ptext)
document.body.appendChild(career_p)



// hobbies

var h31=document.createElement('h3')
var h31_text=document.createTextNode("Technical Skills")
h31.appendChild(h31_text)
document.body.appendChild(h31)

var hr=document.createElement('hr')
document.body.appendChild(hr)

var ol=document.createElement('OL')
document.body.appendChild(ol)

//litst item1
var li1=document.createElement('LI')
var li1_text=document.createTextNode('Python')
li1.appendChild(li1_text)
ol.appendChild(li1)

//litst item2
var li2=document.createElement('LI')
var li2_text=document.createTextNode('Web Development')
li2.appendChild(li2_text)
ol.appendChild(li2)

//litst item3
var li3=document.createElement('LI')
var li3_text=document.createTextNode('Data Analysis')
li3.appendChild(li3_text)
ol.appendChild(li3)



//----Details


var h32=document.createElement('h3')
var h32_text=document.createTextNode('Details')
h32.appendChild(h32_text)
document.body.appendChild(h32)

var hr=document.createElement('hr')
document.body.appendChild(hr)

var ol=document.createElement('uL')
document.body.appendChild(ol)

//detail 1
var phone=document.createElement('LI')
var phone_text=document.createTextNode('Phone: 9502424560 ')
phone.appendChild(phone_text)
ol.appendChild(phone)

//detail 2
var name_D=document.createElement('LI')
var name_text=document.createTextNode('Name: Sukumar Chennari ')
name_D.appendChild(name_text)
ol.appendChild(name_D)

//detail 3
var date_D=document.createElement('LI')
var date_text=document.createTextNode('Date: 29/06/2024 ')
date_D.appendChild(date_text)
ol.appendChild(date_D)

//--- declaration
var h33=document.createElement('h3')
var h33_text=document.createTextNode('Declaration')
h33.appendChild(h33_text)
document.body.appendChild(h33)

var hr=document.createElement('hr')
document.body.appendChild(hr)


var dec_p=document.createElement('p')
var dec_text=document.createTextNode('I hereby declare that all the information given above is true and correct to the best of my knowledge')

document.body.appendChild(dec_p)
dec_p.appendChild(dec_text)