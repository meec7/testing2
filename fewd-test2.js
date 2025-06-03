        
        function CalcVowels() {
            let user = document.getElementById("vowels").value.trim().toUpperCase().split("");
            let vowels = ['A','E','I','O','U']
            let count = 0;
            for (let i = 0; i < text.length; i++) {
                if (user[i] === vowels) {
                    count++;
                }
            }
            document.getElementById("VowelsResult").textContent = count;
        }

 /*not work*/


        function CalcVolume() {
            let r = document.getElementById("Radius").value;
            let v = 4/3*3.14*(r*r*r) 
            /*Following provided formula, its 4/3 multiplied by pi multiplied by radius^3*/
            document.getElementById("VolumeResult").textContent = v;
        }

        function ShowGrade() {
            let value = document.getElementById("Mark").value;
            let grade;
            if (value <= 100 && value >= 90){
                grade = "A";
            } else if (value <= 89 && value >= 80){
                grade = "B";
            } else if (value <= 79 && value >= 70){
                grade = "C";
            } else if (value <= 69 && value >= 60){
                grade = "D";
            } else if (value < 59){
                grade = "E"
            } else {
                grade = "Invalid"
            }
            document.getElementById("GradeResult").textContent = grade;
        }

/* use a lot of if statements and else if to compare the mark e.g if value is less or equal AND more and equal to 90 then 
student gets an A*/