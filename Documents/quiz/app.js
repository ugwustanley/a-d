const op1 = document.getElementsByClassName("op1");
const answer = document.getElementsByClassName("answer");
const ans = document.getElementsByClassName("ans");
const appe = document.getElementById("appe");
const clean = document.getElementById("clean");
const next = document.getElementById("next");
const add =  document.getElementById("add");
const noo = document.getElementById("noo");
const qone = document.getElementById("qone");
const qtwo = document.getElementById("qtwo");
const questionb = document.getElementById("questionb");
const ans1 = document.getElementById("ans1");
const ans2 = document.getElementById("ans2");
const ans3 = document.getElementById("ans3");
const ans4 = document.getElementById("ans4");
const curr = document.getElementById("curr");
const pro = document.getElementById("pro");
const scor = document.getElementById("scor");
const ne = document.getElementById("ne");
const update1 = document.getElementById("update1");
const adds = document.getElementsByClassName("adds");
let current = 0;
let remaining = 0;
var values = [
   
    {
        question1:"what is the full meaning of WHO",
        answer1:"world heroine organization",
        answer2:"world health organization",
        answer3:"world healthy orphans",
        answer4:"whole health organs",
        correctans:1,
    },
    {
        question1:"what is the mortality rate of covid-19",
        answer1:"20%",
        answer2:"5%",
        answer3:"0.1%-0.15",
        answer4:"1%-3%",
        correctans:3,
    },
    {
        question1:"which year was the first covid-19 case recorded",
        answer1:"2020",
        answer2:"2019",
        answer3:"2018",
        answer4:"2017",
        correctans:1,  
    },
    {
        question1:"covid-19 is a:",
        answer1:"virus",
        answer2:"bacteria",
        answer3:"fungus",
        answer4:"algae",
        correctans:0,
    }
       

]
var remainingq = 4;
var num = 0;
var currentscore = 0;
var numb = 2;
function displayValue(){
     questionb.innerText = values[num].question1;
     console.log('testing testing')
     console.log(values[num].answer2)
     ans1.innerText = values[num].answer1;
     ans2.innerText = values[num].answer2;
     ans3.innerText = values[num].answer3;
     ans4.innerText = values[num].answer4;
     curr.innerText = values[num].correctans;
     remainingq -= 1; 
     num += 1;
     console.log(num) 
     console.log(remainingq)  
}
function answers1(e){
    console.log(e.target)
    console.log(answer[curr.textContent])
     next.style.visibility = "visible";
    if(e.target == answer[curr.textContent]){
        e.target.style.backgroundColor = "green";
        clean.style.pointerEvents = "none";
        current +=1;
        console.log(update1)
        console.log(adds)
        add.innerText = current;
        update1.innerText = current;
        
    }
    else{
        e.target.style.backgroundColor = "tomato";
        answer[curr.textContent].style.backgroundColor = "green";
        clean.style.pointerEvents = "none";
    }
    
    
}
var level = 40;
function nexts(){
    
    if(remainingq === 0 || num == 4 ){
        console.log(appe);
        ne.style.display = "none";
        ne.style.visibility = "hidden";
        appe.style.visibility = "visible";
        appe.style.display = "block";
        
    }else{
       displayValue(); 
       clean.style.pointerEvents = "auto";
       ans1.style.backgroundColor = "white";
       ans2.style.backgroundColor = "white";
       ans3.style.backgroundColor = "white";
       ans4.style.backgroundColor = "white";
       console.log(ans1.style.backgroundColor);
       next.style.visibility = "hidden";
       noo.innerText =  numb;
       numb +=1;
       pro.style.width = level + "%";
       level += 20;
       console.log(level)
    }
}

    