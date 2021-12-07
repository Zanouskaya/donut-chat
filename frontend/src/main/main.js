import './main.css'
import FormInput from "../components/autorization/FormInput";
import {useState} from 'react';




const Main = () => {
    const [values, setValues] = useState ({
        username:'',
        email:'',
        // birthday:'',
        password:'',
        confirmPassword:'',
    });

    const inputs = [
        {
            id: 1,
            name:'username',
            type:'text',
            // placeholder:'Username',
            errorMessage:"Username should be 3-16 characters and shouldn't inlude any special character!",
            label:'Username',
            pattern: '^[A-Za-z0-9]{3,16}$',
            required: true
        },
        {
            id: 2,
            name:'email',
            type:'email',
            // placeholder:'Email',
            errorMessage:'It should be a valid email address',
            label:'Email',
            required: true
        },
        // {
        //     id: 3,
        //     name:'birthday',
        //     type:'date',
        //     placeholder:'Birthday',
        //     label:'Birthday'
        // },
        {
            id: 4,
            name:'password',
            type:'password',
            // placeholder:'Password',
            errorMessage:'Password should be 8-20 characters and include at least 1 letter, 1 number, 1 special character',
            label:'Password',
            pattern: `^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,20}$`,
            required: true
        },
        {
            id: 5,
            name:'confirmPassword',
            type:'password',
            // placeholder:'Confirm Password',
            errorMessage:"Passwords don't match",
            label:'Confirm Password',
            pattern: values.password,
            required: true
        }
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
                <h2>Create Account</h2>
                {inputs.map((input)=>
                    <FormInput key={input.id} {...input}
                               value={values[input.name]}
                               onChange={onChange}
                    />
                )}

                <button>Submit</button>
            </form>
        </div>
    );
};

export default Main;
