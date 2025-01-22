import React ,{useEffect, useState} from 'react'
import { deleteEmployee, listEmployyes } from '../Services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeCompnent = () => {
const [employee, setEmployee] = useState([])
//usestate it's function it return array  [state varible , update state variable]

const navigator = useNavigate();


useEffect(() => {
getAllEmployees();
}, [] )

function getAllEmployees(){

  listEmployyes().then((response) => {
    setEmployee(response.data);
    
    }).catch(error =>  {
    console.error(error);
    
    }
    )
}

function addNewEmployee(){
    //page to navigate
navigator('/add-employee') 
}
function udateEmployee(id){
  navigator(`/edit-employee/${id}`)

}

function removeEmployee(id){
console.log(id);
deleteEmployee(id).then((response) =>{
getAllEmployees();
}).catch( error => {
  console.error(error);
})
}
  return (
    <div className='container' >

    <h2 className='text-center'>List of Employee</h2>

    <button className='btn btn-primary mb-2' onClick={addNewEmployee}> Add Employee</button>
    <table className='table table-striped table-bordered'>
<thead>
    <tr>
<th>Employee First Name</th>
<th>Employee Last Name</th>
<th>Employee Email Id</th>
<th>Actions</th>
    </tr>
</thead>
<tbody>
    {
      employee.map(employee => 
<tr key={employee.id} >

<td>{employee.firstName}</td>
<td>{employee.lastName}</td>
<td>{employee.email}</td>
<td>
<button className='btn btn-info' onClick={() => udateEmployee(employee.id) }>Update</button>
<button className='btn btn-danger' onClick={() => removeEmployee(employee.id) }
style={{marginLeft:'10px'}}

>Delete</button>
</td>
</tr>
         )
    }


</tbody>

    </table>
    </div>
  )
}

export default ListEmployeeCompnent