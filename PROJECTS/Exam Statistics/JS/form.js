function collectData(){
    nameAndSurname = nameInput.value;
    nameAndSurnameArray = nameAndSurname.split(' ');
    
    subjectSelected = subjectSelect.value;
    
    gradeSelected = gradeInput.value;

    newStudent = new Student(nameAndSurnameArray[0], nameAndSurnameArray[1]);
    
    newSubject = new Subject(subjectSelected);
    

    newExam = new Exam(newSubject, newStudent, gradeSelected);

    console.log(newExam.hasPassed());
    
    
}

function updateStatistic(){
    numOfPassedNumber = parseInt(numOfPassed.textContent);
    numOfFailedNumber = parseInt(numOfFailed.textContent);
    


    
    
    if(newExam.hasPassed()){
        totalNumOFStudents ++;
        numOfPassedNumber ++;
        percentOfPassedNum = numOfPassedNumber / totalNumOFStudents * 100;
        numOfPassed.textContent = numOfPassedNumber;
        percentOfFailedNum = numOfFailedNumber / totalNumOFStudents * 100;
        percentOfFailed.textContent = percentOfFailedNum + ' %';
        percentOfPassed.textContent = percentOfPassedNum + ' %';
    }else{
        totalNumOFStudents ++;
        numOfFailedNumber ++;
        percentOfPassedNum = numOfPassedNumber / totalNumOFStudents * 100;
        percentOfPassed.textContent = percentOfPassedNum + ' %';
        percentOfFailedNum = numOfFailedNumber / totalNumOFStudents * 100;
        percentOfFailed.textContent = percentOfFailedNum + ' %';
        numOfFailed.textContent = numOfFailedNumber;
    }

    console.log(totalNumOFStudents);
    
}

function updateLists(){
    
    if(newExam.hasPassed()){
        var text = document.createTextNode(subjectSelected + '-' + newStudent.getStudentData() + gradeSelected);
        passedLi = document.createElement('li');
        passedLi.appendChild(text);
        passedList.appendChild(passedLi);
    }else{
        var text = document.createTextNode(subjectSelected + '-' + newStudent.getStudentData() + gradeSelected);
        failedLi = document.createElement('li');
        failedLi.appendChild(text);
        failedList.appendChild(failedLi);
    }
}











addButton.addEventListener('click', function(){
    collectData();
    updateStatistic();
    updateLists();
})
