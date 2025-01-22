import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../Services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const EmployeeComponent = () => {
const [firstName , setFirstName] = useState('')
const [lastName , setLastName] = useState('')
const [email , setEmail] = useState('')
const navigator = useNavigate();



const {id} = useParams(); //this is a hook provided by React Router that allows you to access the URL parameters of the current route
//this return the value of id
const [errors, setErrors] = useState({
firstName :'',
lastName:'', 
email : ' '
})

useEffect(() => {

  if(id){
    console.log(id);
    getEmployee(id).then((response) => {
setFirstName(response.data.firstName);
setLastName(response.data.lastName);
setEmail(response.data.email);

    }).catch(error => {

      console.error(error);
    } )
  }
} , [id]) 




function saveOrUpdateEmployee(e){
  e.preventDefault();

  if(validateForm()){
    const employee = {firstName, lastName, email}
    console.log(employee)


  if(id){
    //if there is id which mean update function
    updateEmployee(id,employee).then((response) => {
      console.log(response.data);
    navigator('/employees');
    }).catch(error => {
console.error(error);

  })
}else {
  //if there is mo id it mean create new employee function 
  createEmployee(employee).then((response) => {
    console.log(response.data);
    navigator('/employees')

  }).catch(error =>{

    console.error(error);
  })

}

}

}






function validateForm(){
  let valid = true;

  const errorsCopy = {... errors}

  if(firstName.trim()){
    errorsCopy.firstName = '' ;
  }else{
    errorsCopy.firstName = 'First name is required';
    valid = false;
  }
  if(lastName.trim()){
    errorsCopy.lastName = '' ;
  }else{
    errorsCopy.lastName = 'Last name is required';
    valid = false;
  }

  if(email.trim()){
    errorsCopy.email = '' ;
  }else{
    errorsCopy.email = 'Email is required';
    valid = false;
  }
setErrors(errorsCopy);
return valid;
}

function pageTitle(){
if(id){
  <h6 className='text-center'>Update Employee</h6>
 
}
else{
  <h6 className='text-center'>Add Employee</h6>
}
}
  return (
   <div className='container' >
    <br></br>
<div className='row'>
  
<div className='custom-border'>
  {
    pageTitle()
 
 }


<div className='card-body'>
<form>
<div className='form-group mb-2'>
  <br></br>
  <br></br>
<label className='form-label'>Employee First Name:</label>

<input
type='text'
placeholder='Enter Employee First Name '
name='firstName'
value={firstName}
className={`form-control ${errors.firstName? 'is-invalid': ''}`}
onChange={(e) => setFirstName(e.target.value) }
>
</input>
{errors.firstName && <div className='invalid-feedback'>{errors.firstName} </div> }
</div>


<div className='form-group mb-2'>
<label className='form-label'>Employee Last Name:</label>
<input
type='text'
placeholder='Enter Employee Last Name '
name='lastName'
value={lastName}
className={`form-control ${errors.lastName? 'is-invalid': ''}`}
onChange={(e) => setLastName(e.target.value) }
>
</input>
{errors.lastName && <div className='invalid-feedback'>{errors.lastName} </div> }

</div>
<div className='form-group mb-2'>
<label className='form-label'>Employee Email:</label>
<input
type='text'
placeholder='Enter Employee Email '
name='email'
value={email}
className={`form-control ${errors.email? 'is-invalid': ''}`}
onChange={(e) => setEmail(e.target.value) }
>
</input>
{errors.email && <div className='invalid-feedback'>{errors.email} </div> }

</div>

<button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>


</form>

</div>
</div>

</div>



   </div>
  )
}

export default EmployeeComponent