const employee = {
    name: "Bob", 
    streetAddress : "200 Broadway"
}
function updateEmployeeWithKeyAndValue (employee, key, value) {
return {...employee, [key]: value,} 
}
const newEmployee = updateEmployeeWithKeyAndValue (
    employee, 
    "Joe",
    "500 Grand",
)
function deleteEmployeeByKey (emplyee, key, value) {
    return (delete emplyee.name)
}