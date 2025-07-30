let employees=[];
function addEmp(id,name,salary=true){
    employees.push(id,name,salary);
    console.log("Employees added",employees);
}
addEmp(1,"jhon",200000)
addEmp(2,"hari",2200)
addEmp(3,"alice",23000)


//employees update
function updateEmp(id,newDetail){
const emp=employees.find(e=>e.id===id);
if(emp){
    Object.assign(emp,newDetail);
    console.log("update",employees)
}
else{
    console.log("Employee not found")
}
}
updateEmp(1,{name:"joe"})
// to remove
function removeEmp(id){
    const index=employees.findIndex((e)=>e.id==id);
    if(index!==-1){
        employees.splice(index,id)
        console.log("employees removed",employees)
    }
    else{
        console.log("Employee not found")
    }
}
removeEmp(1)
//calculate
function totalSalary(){
    const total=employees.reduce((sum,emp)=>sum+emp.salary,0)
    console.log("total salary is",total);
}
totalSalary()