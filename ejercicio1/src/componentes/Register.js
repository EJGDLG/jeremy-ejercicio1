import react,{useState} from 'react';

Function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        const response = awalt fetch('http://localhost/resgister.php',{
            method: 'POST',
            headers: { 'content-Type': 'aplication/json'},
            body: JSON.stringify(( username, email, password))
        }};

        const data = await response.json();
        if (data. success) {