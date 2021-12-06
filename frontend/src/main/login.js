import React from 'react';
import {Link} from 'react-router-dom';
import './main.css'
import FormInput from "../components/FormInput";
import {useState} from 'react';

const LogIn = () => {
    const [values, setValues] = useState ({
        email:'',
        password:'',
    });

    const inputs = [

        {
            id: 1,
            name:'email',
            type:'email',
            label:'Email',
            // required: true
        },

        {
            id: 2,
            name:'password',
            type:'password',
            label:'Password',
            // required: true
        },

    ];

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const onChange = (e) => {
        setValues( {...values, [e.target.name]: e.target.value });
    }

    // async function addUser(value) {
    //   const response = await fetch ('http://127.001:5000/api/login', {
    //     method: "POST",
    //     body: JSON.stringify(value),
    //     // headers: {
    //     //   'Content-Type: aplication/json'
    //     // }
    //   });
      // const data = await response.json();
    //   console.log(data)
    // }


    return (
        <div className='container-main'>

            <form onSubmit={handleSubmit}>
                <h2>LogIn</h2>
                {inputs.map((input)=>
                    <FormInput key={input.id} {...input}
                               value={values[input.name]}
                               onChange={onChange}
                    />
                )}
                <Link to='/profile'>
                <button>LogIn</button>
                </Link>
                <h5>Don't have account?</h5>
                <Link to="/step1">
                <button className="btn-second">Create account</button>
                </Link>
            </form>
        </div>
    );
};
export default LogIn;
