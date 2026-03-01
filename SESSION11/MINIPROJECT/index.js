let studentList = [
    {ID: 1, Name: "Nguyen Van A", Age: 20, GPA: 8.5, Status: "active" },
    {ID: 2, Name: "Tran Thi Bich", Age: 17, GPA: 7.2, Status: "active" },
  {ID: 3, Name: "Le Hoang Cuong", Age: 22, GPA: 9.1, Status: "inactive" },
    {ID: 4, Name: "Pham Thi Dung", Age: 19, GPA: 6.8, Status: "active" },
]

let menuText = `
=====STUDENT MANAGERMENT SYSTEM=====
1. Create Student
2. Read All Students
3. Filter Scholarship Candidates
4. Update Student Profile
5. Delete Record
6. Compliance Verification
7. Academic Statistics
8. Data Normalization
0.Exit
====================================
Enter your choice:
`

  let userChoice;
    const displayMenu = () => {
        userChoice = +prompt(menuText)
    }

   let startingId = 4;
   const createStudent = (arrayStudent) => {
       let newStudentObject = {}
      let studentName = "", studentAge = "", studentGpa = "", studentStatus = ""
       startingId++
       
        do {
            studentName = prompt("Enter name student")
        if(!studentName){
            alert("Name cannot be empty")
        }
        } while (!studentName);
        
       do {
           studentAge = +prompt("Enter age student")
           if(!studentAge || !Number.isInteger(studentAge) || studentAge < 0){
               alert("Invalid age")
           }
       } while (!studentAge || !Number.isInteger(studentAge) || studentAge < 0);
       
       do {
           studentGpa = +prompt("Enter GPA (0-10.0)")
           if(isNaN(studentGpa) || !studentGpa || studentGpa < 0 || studentGpa > 10){
               alert("Invalid GPA")
           }
       } while (isNaN(studentGpa) || !studentGpa|| studentGpa < 0 || studentGpa > 10);
       
        do {
            studentStatus = prompt("Enter status(active/inactive)").toLowerCase().trim()
            if(!studentStatus || (studentStatus != "active" && studentStatus != "inactive")){
                alert(`Status must be "active" or "inactive"`)
            }
        } while (!studentStatus || (studentStatus != "active" && studentStatus != "inactive"));

       newStudentObject.ID = startingId
       newStudentObject.Name = studentName
       newStudentObject.Age = studentAge
       newStudentObject.Status = studentStatus
       newStudentObject.GPA = studentGpa
       
       arrayStudent.push(newStudentObject)
       alert("Add student successful")
       return arrayStudent
   }   

  const readAllStudent = (arrayStudent) => {
      let stringAllStudents = arrayStudent.map((student) => {
          return `ID: ${student.ID} | Name: ${student.Name} | Age: ${student.Age}  | GPA: ${student.GPA} | Status: ${student.Status} \n`
      })
      return stringAllStudents.join("")
  }

 const filterSchoolshipByGpa = (arrayStudent) => {
     let listFiltered = arrayStudent.filter((student) => {
         return student.GPA > 8.0
     })
     return listFiltered
 }

    const updateStudentById = (idToUpdate, arrayStudent) => {
        let listFoundUpdate = arrayStudent.filter((student) => {
            return student.ID == idToUpdate
        })
        if(listFoundUpdate.length == 0){
            alert(`Not found ID ${idToUpdate}`)
            return 0
        }else{
            alert(`
Found:
${readAllStudent(listFoundUpdate)}
Leave blank to keep current value
                `)
                do {
                    listFoundUpdate[0].Name = prompt("Enter new student name")
                    if(!listFoundUpdate[0].Name){
                        alert("Invalid new name")
                    }
                } while (!listFoundUpdate[0].Name);
                do {
                    listFoundUpdate[0].GPA = +prompt("Enter new student gpa")
                    if(isNaN(listFoundUpdate[0].GPA) || listFoundUpdate[0].GPA < 0 || listFoundUpdate[0].GPA > 10 || !listFoundUpdate[0].GPA){
                        alert("Invalid new GPA")
                    }
                } while (isNaN(listFoundUpdate[0].GPA) || listFoundUpdate[0].GPA < 0 || listFoundUpdate[0].GPA > 10 || !listFoundUpdate[0].GPA);
            alert("Update successful student")
        }
    }   
    
    const deleteStudentById = (idToDelete, arrayStudent) => {
        let indexToDelete = arrayStudent.findIndex((student) => {
            return student.ID == idToDelete
        })
        let confirmDelete = ""
        do {
            confirmDelete = prompt(`
Are you sure want to delete
ID: ${arrayStudent[indexToDelete].ID} | Name: ${arrayStudent[indexToDelete].Name} | Age: ${arrayStudent[indexToDelete].Age}  | GPA: ${arrayStudent[indexToDelete].GPA} | Status: ${arrayStudent[indexToDelete].Status}

Type "yes" to confirm:            `).toLowerCase().trim()
                if(!confirmDelete){
                    alert("Please input your choice")
                }
        } while (!confirmDelete);
            if(confirmDelete == "yes"){
                alert(`Student ${arrayStudent[indexToDelete].Name} has been deleted.`)
                arrayStudent.splice(indexToDelete,1)
            }else{
                alert("Delete cancelled")
            }
    }

do {
  displayMenu()
  switch (userChoice) {
      case 1:
          createStudent(studentList)
          break;
      case 2: 
          alert(`
=====ALL STUDENT=====
----------------------------------------------------------------
${readAllStudent(studentList)}
----------------------------------------------------------------
Total: ${studentList.length} student(s)`);
          
          break;
      case 3:
          alert(`
=====SCHOLARSHIP CANDIDTES(GPA >8.0)=====
----------------------------------------------------------------
${readAllStudent(filterSchoolshipByGpa(studentList))}
----------------------------------------------------------------
Total: ${filterSchoolshipByGpa(studentList).length} student(s)`);
          
          break;
      case 4:
          let inputIdUpdate = +prompt("Enter student ID to update");
              updateStudentById(inputIdUpdate, studentList)
          break;
      case 5:
          let inputIdDelete = +prompt("Enter student to delete")
          deleteStudentById(inputIdDelete, studentList)
          break;
      case 6:
          break;
      case 7:
          break;
      case 8:
          break;
      case 0:
          alert("Thanks for using my app")
          break;
  
      default:
          alert("Invalid choice! Please input a number from 0 to 8")
          break;
  }
} while (userChoice !== 0);