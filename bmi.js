const empty = document.getElementById("empty");
const heightUnit = document.getElementById("height-unit");
const weightUnit = document.getElementById("weight-unit");
const heightInput = document.getElementById("height-input");
const heightInputDecimal = document.getElementById("height-input-decimal");
const weightInput = document.getElementById("weight-input");
const submit = document.getElementById("submit");
const bmiResult = document.getElementById("result");
const response = document.getElementById("text");
const errorText = document.getElementById("alert");
const metric = "Metric";
const imperial = "Imperial";


let bmi,chooseValue,metricValue,passedValue;


const choises = ["Choose units","Metric","Imperial"];
const select = document.createElement("select");
select.id = "choose-option";
empty.appendChild(select);
choises.forEach(e => {
    let option = document.createElement("option");
    option.value = e;
    option.text = e;
    select.appendChild(option);   
    chooseValue = option.value; 
    return chooseValue;
})

select.addEventListener("change", (chooseValue) => {
    if (chooseValue.target.value === metric) {
        heightUnit.innerHTML = " ( m & cm )";
        weightUnit.innerHTML = " ( kg )";
        metricValue = chooseValue.target.value;      
    }
    else{
        heightUnit.innerHTML = " ( feet & inch )";
        weightUnit.innerHTML = " ( lb )";
        metricValue = chooseValue.target.value; 
    }  
    passedValue = metricValue; 
})

submit.addEventListener("click",() => {
    let height = heightInput.value;
    let weight = weightInput.value;
    let heightDecimal = heightInputDecimal.value; 
    if (passedValue === metric) {  
        if(height <= 2){   
            let heightStr = height.toString().concat(".",heightDecimal.toString()); 
            height = Number(heightStr);
            bmi = ( weight / ( height * height )).toFixed(2);
            bmiResult.value = bmi;
            result();
            error();
        }else  errorText.innerHTML = `Please  press "Restart" and insert a valid height and a valid weight`;
    }else{ 
        if(height <= 8){    
            let inchString = height.toString().concat(".",heightDecimal.toString()); 
            let inch = Number(inchString) * 12; 
            bmi = ((weight / ( inch * inch ))* 703).toFixed(2);
            bmiResult.value = bmi;
            result();
            error();
        }else  errorText.innerHTML = `Please  press "Restart" and insert a valid height and a valid weight`;
    }
});


const result = () => {       
       if( bmi < 15 || bmi < 15){
            bmiResult.innerHTML = ` ${bmi}`;
            response.innerHTML = ` BMI  ${bmi}  is considered very severely underweight.`;
       }   
        else if( bmi > 15 && bmi < 16 ){
            bmiResult.innerHTML = ` ${bmi}`;
            response.innerHTML = ` BMI   ${bmi}  is considered  severely underweight.`;
        }
       else if( bmi > 16 && bmi < 18.5){
            bmiResult.innerHTML = ` ${bmi}`;
            response.innerHTML = ` BMI  ${bmi}  is considered   underweight.`;
       }
        else if( bmi > 18.5 && bmi < 25 ){
            bmiResult.innerHTML = ` ${bmi}`;
            response.innerHTML = ` BMI   ${bmi}  is considered   normal.`;
        }
        else if( bmi > 25 && bmi < 30  ){
            bmiResult.innerHTML = ` ${bmi}`;
            response.innerHTML = ` BMI   ${bmi}  is considered  overweight.`;
        }
        else if( bmi > 30 && bmi < 35 ){
            bmiResult.innerHTML = ` ${bmi}`;
            response.innerHTML = ` BMI   ${bmi}  is considered   moderately obese.`; 
        }
        else if( bmi > 35 && bmi < 40){
            bmiResult.innerHTML = ` ${bmi}`;
            response.innerHTML = ` BMI   ${bmi}  is considered  severely obese.`; 
        }
        else if( bmi > 40){
            bmiResult.innerHTML = ` ${bmi}`;
            response.innerHTML = ` BMI   ${bmi}  is considered  very severely obese.`; 
        }
   
};


const restart = () => {
    heightInput.value = "";
    heightInputDecimal.value = "";
    weightInput.value = "";
    bmiResult.innerHTML = "";
    response.innerHTML = "";   
    errorText.innerHTML = "";
    result();
    error();
};

const error = () => {
    let height = heightInput.value;
    let weight = weightInput.value;
    let heightDecimal = heightInputDecimal.value;
    let heightDot = heightDecimal.includes(".");
    let weightDot = weight.includes(".");
    if( isNaN(height) || isNaN(weight) || isNaN(heightDecimal) || Math.sign(height) === -1 ||
         Math.sign(weight) === -1 || Math.sign(heightDecimal) === -1 || heightDot === true || weightDot === true){   
            errorText.innerHTML = `Please  press "Restart" and insert a valid height and a valid weight`;
            bmiResult.innerHTML = "";
            response.innerHTML = "";

    }
 };

