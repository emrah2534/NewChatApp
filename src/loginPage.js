import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState, useEffect,} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const LoginPage=({setUserLoggedIn, setUserEmail}) =>{
    const url = 'http://127.0.0.1:8000/users'
    const [users, setUsers] = useState({})
    const [enablePass, setEnablePass] = useState(false)

  const info = {
    email:'',
    password:''

  }
  const getUsers = ()=>{
      axios.get(url)
          .then(response=>{setUsers(response.data)})
      console.log(users)
  }

  const handleSubmit=()=> {

        users.map(user=>{
            console.log(`User in .map ${user.email}, ${user.password}`)
            console.log(enablePass)
            if (user.email===info.email && user.password===info.password) {
                console.log(user)
                setUserLoggedIn(user.name)
                setUserEmail(user.email)
                setEnablePass(true)
            }

        })

  }
 const handleChange = (event)=> {
   event.target.type==='email' ? info.email=event.target.value: info.password = event.target.value
     console.log(info)

 }
 useEffect(()=>{
     getUsers()
 },[1])

  return (
      <>
      <h2 style={{textAlign:'center'}}>Welcome To ChatApp</h2>
      <div style={{marginLeft:'25%', marginRight:'25%', marginTop:'10%',marginBottom:'10%', padding:'5%', border:'3px solid',
              borderRadius:'20px', borderColor:'rgba(50, 115, 220, 0.3)'}}>
        <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={handleChange} type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={handleChange} type="password" placeholder="Password" />
              </Form.Group>

              <Link to={`${enablePass ?'home' : '/'}`}><Button onClick={handleSubmit} variant="primary" type="submit">
                Login
              </Button></Link>
              <Button style={{marginLeft:'5px'}} variant="primary" type="submit">
                Create Account
              </Button>
         </Form>
       </div>
        </>
  );
}

export default LoginPage;