var currentDay = document.querySelector("#currentDay");
var calenderList = document.querySelector(".container")
var now = moment().format('hA');
//var input = JSON.parse(localStorage.getItem('input'))

//var timeSet = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

currentDay.innerHTML = moment().format("dddd, MMMM Do YYYY");


//i couldn't get the local storage to work through the for loop.

// function createList() {
//     console.log(timeSet)

//     for (var i = 0; i < timeSet.length; i++) {

//         var div1 = document.createElement('div');
//         $(div1).addClass('input-group input-group-lg');
//         var div2 = document.createElement('div');
//         $(div2).addClass('input-group-prepend');
//         var timeNum = document.createElement('span');
//         $(timeNum).addClass("input-group-text");
//         var calenderInput = document.createElement('input');
//         $(calenderInput).addClass("form-control");
//         var div3 = document.createElement('div');
//         $(div3).addClass('input-group-append');
//         var saveButton = document.createElement('button');
//         $(saveButton).addClass("btn btn-outline-secondary");

//         timeNum.innerHTML = timeSet[i];
//         saveButton.innerHTML = "Save";
//         calenderInput.innerHTML = input

//         if (timeSet[i] == now) {
//            $(calenderInput).addClass('bwue');
//         } else if ( timeSet >= now) {
//             $(calenderInput).addClass('rwd')
//         } else {
//             $(calenderInput).addClass('gween')
//         }
        

//         // console.log(now)
//         // console.log(timeSet[i])
//         savedInput = calenderInput.value;


//         saveButton.addEventListener('click', function(event) {
//             event.preventDefault();
//             saveData()
//         })

//         function saveData() {
//                 localStorage.setItem('input', JSON.stringify(calenderInput.value))
//             };

//         calenderList.append(div1);
//         div1.append(div2);
//         div2.append(timeNum);
//         div1.append(calenderInput);
//         div1.append(div3);
//         div3.append(saveButton);
//     }
// };


var input1 = document.querySelector('#input-1');
var button1 = document.querySelector('#button-1');
var input2 = document.querySelector('#input-2');
var button2 = document.querySelector('#button-2');
var input3 = document.querySelector('#input-3');
var button3 = document.querySelector('#button-3');
var input4 = document.querySelector('#input-4');
var button4 = document.querySelector('#button-4');
var input5 = document.querySelector('#input-5');
var button5 = document.querySelector('#button-5');
var input6 = document.querySelector('#input-6');
var button6 = document.querySelector('#button-6');
var input7 = document.querySelector('#input-7');
var button7 = document.querySelector('#button-7');
var input8 = document.querySelector('#input-8');
var button8 = document.querySelector('#button-8');
var input9 = document.querySelector('#input-9');
var button9 = document.querySelector('#button-9');




button1.addEventListener('click', saveData1);
button2.addEventListener('click', saveData2);
button3.addEventListener('click', saveData3);
button4.addEventListener('click', saveData4);
button5.addEventListener('click', saveData5);
button6.addEventListener('click', saveData6);
button7.addEventListener('click', saveData7);
button8.addEventListener('click', saveData8);
button9.addEventListener('click', saveData9);



function saveData1() {
    localStorage.setItem('input1', JSON.stringify(input1.value));
};

function saveData2() {
    localStorage.setItem('input2', JSON.stringify(input2.value));
};

function saveData3() {
    localStorage.setItem('input3', JSON.stringify(input3.value));
};

function saveData4() {
    localStorage.setItem('input4', JSON.stringify(input4.value));
};

function saveData5() {
    localStorage.setItem('input5', JSON.stringify(input5.value));
};

function saveData6() {
    localStorage.setItem('input6', JSON.stringify(input6.value));
};

function saveData7() {
    localStorage.setItem('input7', JSON.stringify(input7.value));
};

function saveData8() {
    localStorage.setItem('input8', JSON.stringify(input8.value));
};

function saveData9() {
    localStorage.setItem('input9', JSON.stringify(input9.value));
};

function refreshData() {
    input1.value = JSON.parse(localStorage.getItem('input1'));
    input2.value = JSON.parse(localStorage.getItem('input2'));
    input3.value = JSON.parse(localStorage.getItem('input3'));
    input4.value = JSON.parse(localStorage.getItem('input4'));
    input5.value = JSON.parse(localStorage.getItem('input5'));
    input6.value = JSON.parse(localStorage.getItem('input6'));
    input7.value = JSON.parse(localStorage.getItem('input7'));
    input8.value = JSON.parse(localStorage.getItem('input8'));
    input9.value = JSON.parse(localStorage.getItem('input9'));

    console.log("pensive cowboy")
}


// function timeGet() {
//     if (moment('hA').isSame('9AM')) {
//         $(input1).addClass('bwue')
//     }
// }

//createList();
refreshData ();
//timeGet();
