import './main.css'
import FormInput from "../components/FormInput";
import {useState} from 'react';




const Step1 = () => {
    const [values, setValues] = useState ({
        username:'',
        nickName:'',
        birthday:'',
        country:'',
    });

    const inputs = [
        {
            id: 1,
            name:'username',
            type:'text',
            // placeholder:'Username',
            label:'Username',
            pattern: '^[A-Za-z0-9]{3,16}$',
            required: true
        },
        {
            id: 2,
            name:'nickName',
            type:'id',
            // placeholder:'Email',
            errorMessage: 'This nickname is already taken',
            label:'nickName',
            required: true
        },
        {
            id: 3,
            name:'birthday',
            type:'date',
            placeholder:'Birthday',
            label:'Birthday'
        },
        {
            id: 4,
            name:'country',
            type:'select',
            label:'Select country',
            required: true
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

export default Step1;