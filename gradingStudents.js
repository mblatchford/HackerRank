// let grades = [4,73,67,38,33] 

function gradingStudents(grades){
  const numStudents = grades[0];
    for (let i = 1; i <= numStudents; i++) {
      let nextMultiple = 0;
      //no checking for any values less than 38
      if (grades[i] >= 38) {
          //rounded up is next multiple of 5
          nextMultiple = Math.ceil(grades[i] / 5) * 5 
          //if difference of multiple and current grade is less than 3 proceed
          if (nextMultiple - grades[i] < 3) {
              grades[i] = nextMultiple; //print out rounded grade
          } 
      }
    }
  return grades
}

// console.log(gradingStudents(grades));