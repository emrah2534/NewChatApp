import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect,} from "react";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Row, Col, Grid, Container} from "react-bootstrap";
import NavBar from "./navBar";
import SendEmail from "./sendEmail";



const HomePage = ({userLoggedIn, userEmail, usersEmails, contactForm, setContactForm})=>{
  const url = 'http://127.0.0.1:8000/users'
  const [users, setUsers] = useState({})
  const [userShow, setUserShw] = useState([])

  const getUsers = ()=> {
      setUserShw([])
      fetch(url)
          .then(res => res.json())
          .then(json=>json.forEach((user)=>{


            const new_image = (

                <Col md={3} style={{marginLeft:'0', marginRight:'0'}}>
                    <div key={user.id} style={{marginBottom:'20px'}}>
                    <Card className='text-center'>
                      <Card.Img style={{width: '100%', maxHeight:'210px'}} src={user.image}  />
                      <Card.Body>
                        <Card.Title>{`${user.name} ${user.surname}`}</Card.Title>
                        <Card.Text>{`Hobbies: ${user.description}`}</Card.Text>
                        <Link to={`details/${user.id}`}><Button variant="primary">Edit</Button></Link>
                      </Card.Body>
                        <Card.Footer className='text-muted' > {user.email}</Card.Footer>
                    </Card>
                    </div>
                </Col>
             );
            console.log(user.name)

             setUserShw(prev=>[...prev, new_image])
            const newContactForm = {
                name:user.name,
                email:user.email,

            }
                setContactForm(prev=>[...prev, newContactForm])
              usersEmails.push(user.email)


          }))
  }



   useEffect(()=>{
     getUsers()
       },[1])

      return (
          <>
              <div style={{marginBottom:'15px'}}><NavBar userLoggedIn={userLoggedIn}/></div>
              <div style={{display:'flex '}}>{userShow} </div>
             <div style={{marginLeft:'15%', marginRight:'15%'}}><SendEmail userEmail={userEmail}
                                                   usersEmails={usersEmails}
             contactForm={contactForm} setContactForm={setContactForm}/></div>

          </>
      )}


export default HomePage;