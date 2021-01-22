   const calcy=() =>{
            let wd = document.getElementById('wd').value;
            let maths = document.getElementById('maths').value;
            let comp = document.getElementById('comp').value;
            let phy = document.getElementById('phy').value;
            let grade = "";
            console.log(`${wd}`);
            var status = false;

            let totalMarks = parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy) ;
            // alert(totalMarks);
            let percent = (totalMarks*100)/400;
            // alert(percent + "%");

            if(percent<=100 && percent >=80){
                grade = "A";
            }else if(percent <=79 && percent>=60){
                grade = "B";
            }else if(percent <=59 && percent >= 34){
                grade = "C";
            }else{
                grade = "F";
            }

            if(wd>100 || maths>100 || comp >100 || phy >100){
            document.getElementById('showData').innerHTML="Marks cant br greater then 100";
            }
            else if(percent>=34){
                document.getElementById('showData').innerHTML = `
              Out of 400 your total is ${totalMarks} and percentage is ${percent}%. <br> Your grade is ${grade}.
              You Are pass.
              `
            }
          else if(wd =="" || wd=="null"){
    document.getElementById('showValidation-web').innerHTML= 'Please Enter Web Programming Marks';
}
 else if(maths =="" || maths=="null"){
    document.getElementById('showValidation-maths').innerHTML= 'Please Enter Maths Marks';
}
 else if(comp =="" || comp=="null"){
    document.getElementById('showValidation-comp').innerHTML= 'Please Enter Computer Marks';
}
 else if(phy =="" || phy=="null"){
    document.getElementById('showValidation-phy').innerHTML= ' Please Enter Physics Marks';
}
            
            else{
                 document.getElementById('showData').innerHTML = `
              Out of 400 your total is ${totalMarks} and percentage is ${percent}%. <br> Your grade is ${grade}.
              You Are Fail.
              `
            }
       

        }
