import React, {useState} from 'react'
import './FormRegister.css'
function FormRegister() {
    const [fullname, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [date, setDate] = useState('');
    const [gender, setGender] = useState('');
    const [skill, setSkill] = useState([]);


    function handleSubmit() {
       alert(`
       - Name: ${fullname} 
       - Email: ${email} 
       - Password: ${password} 
       - Address: ${address} 
       - BirthDate: ${date} 
       - Gender: ${gender} 
       - Skill: ${skill}`)
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
                <div>
                    <p>Full Name:</p>
                    <input
                        type='text'
                        name='fullname'
                        id='fullName'
                        placeholder='Full Name'
                        onChange={(event) => setName(event.target.value)}
                        value={fullname}
                    />
                </div>
                <div>
                    <p>Email:</p>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Email'
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                    />
                </div>
                <div>
                    <p>Password:</p>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Password'
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                    />
                </div>
                <div>
                    <p>Address:</p>
                    <textarea
                        type='address'
                        name='address'
                        id='address'
                        cols='30'
                        rows='5'
                        placeholder='Address'
                        onChange={(event) => setAddress(event.target.value)}
                        value={address}
                    />
                </div>
                <div>
                    <p>Birthdate:</p>
                    <input
                        type='date'
                        name='date'
                        id='date'
                        placeholder='Birthdate'
                        onChange={(event) => setDate(event.target.value)}
                        value={date}
                    />
                </div>
                <div>
                    <p>Gender:</p>
                    <input
                        type='radio'
                        name='gender'
                        id='genderMale'
                        value='Male'
                        onChange={(event) => setGender(event.target.value)}
                    /> Male
                     <input
                        type='radio'
                        name='gender'
                        id='gender'
                        value='Female'
                        onChange={(event) => setGender(event.target.value)}
                    />Female
                </div>
                <div>
                    <p>Skill:</p>
                    <input
                        type='checkbox'
                        name='skill'
                        id='skill'
                        value='Coding'
                        onChange={(event) => {
                            if (event.target.checked){
                                setSkill([...skill, event.target.value])
                            } else {
                                setSkill(
                                    skill.filter(
                                        (skill) => skill !== event.target.value
                                    )
                                )
                            }
                            }}
                    />Coding
                    <input
                        type='checkbox'
                        name='skill'
                        id='skill'
                        value='Design'
                        onChange={(event) => {
                            if (event.target.checked){
                                setSkill([...skill, event.target.value])
                            } else {
                                setSkill(
                                    skill.filter(
                                        (skill) => skill !== event.target.value
                                    )
                                )
                            }
                            }}
                    />Design
                    <input
                        type='checkbox'
                        name='skill'
                        id='skill'
                        value='Gaming'
                        onChange={(event) => {
                            if (event.target.checked){
                                setSkill([...skill, event.target.value])
                            } else {
                                setSkill(
                                    skill.filter(
                                        (skill) => skill !== event.target.value
                                    )
                                )
                            }
                            }}
                    />Gaming
                </div>
                
                <input type='submit' value='Register'/>
            </form> 
        </div>
    )
}

export default FormRegister
