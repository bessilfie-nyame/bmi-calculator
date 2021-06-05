let result = document.getElementById("status");
let bmiValue = document.getElementById("bmi");

const calculateBMI = () => {

	height = document.getElementById("height").value;
	weight = document.getElementById("weight").value;

	try{
		if (height<=0 || weight<0 || height==null || weight==null) {
			throw new TypeError("Invalid input");
		}

		const bmi = Math.round((weight / Math.pow(height,2)) * 10000) / 10000;


		bmiValue.innerHTML = bmi;

		if (bmi < 18.5) {
			result.innerHTML = (`Your BMI is ${bmi}, so you are underweight.`);
		}

		else if (18.5 <= bmi && bmi <= 24.9) {
			result.innerHTML = (`Your BMI is ${bmi}, so you have a normal weight.`);
		}

		else {
			result.innerHTML = (`Your BMI is ${bmi}, so you are overweight.`);
		}
	}
	catch(err){
		alert("Please check inputs")
		bmiValue.innerHTML = null;
		result.innerHTML = "Both fields cannot be empty; Weight should be greater than or equal to 0; Height cannot be 0 or less";
	}
};
