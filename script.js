
let result = document.getElementById("result")

function submit(){
    let day = document.getElementById("input1").value ;
    let month = document.getElementById("input2").value;
    let year = document.getElementById("input3").value;
    
    if(day == "" || month == "" || year == ""){
        result.innerText = "Please fill valid data"
    }
    if(day > 31 || month > 12){

        result.innerText = "Please fill valid data"
   }
   if(day >30 && (month == 2 || month == 4 || month == 6 || month == 11 || month == 9)){
    result.innerText = "Please fill valid data"
   }
   if(month >29 && month !== 2){
    result.innerText = "Please fill valid data"
   }
   let today = new Date().getUTCDate()
  
   let thismonth = new Date().getMonth() +1
   
   let thisyear  = new Date().getFullYear()
   let ansDay;
   let ansMonth;
   let ansYear;
   if(today< day){
    today += 30
    thismonth = thismonth-1
    ansDay = today-day
   }
   ansDay = today-day
   if(thismonth< month){
    thismonth += 12
    thisyear = thisyear-1
    ansMonth = thismonth-month
   }
   ansMonth = thismonth-month
   ansYear = thisyear-year

   result.innerText = `Your age is ${ansYear} year ${ansMonth} month ${ansDay} days`
}
