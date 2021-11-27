// import Link from 'react';
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

    console.log(values);

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

                <button><a href='/profile'>LogIn</a></button>
                <h5>Don't have account?</h5>
                <button className="btn-second"><a href="/step1">Create account</a></button>
            </form>
        </div>
    );
};
export default LogIn;
