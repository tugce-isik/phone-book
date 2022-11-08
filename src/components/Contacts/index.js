import  {useState, useEffect} from 'react'
import "./styles.css"

import Form from './Form'
import List from './List'

function Contacts(){
    const [contacts,setContacts] = useState([
        {
            fullname:"Jack",
            phone_number:"123"
        },
        {
            fullname:"Maria",
            phone_number:"567"
        },
        {
            fullname:"july",
            phone_number:"8910"
        }
    ]);

    useEffect(()=>{
console.log(contacts)
    }, [contacts])

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts}></List>
            <Form addContact={setContacts} contacts={contacts}></Form>
        </div>
    )
}

export default Contacts
