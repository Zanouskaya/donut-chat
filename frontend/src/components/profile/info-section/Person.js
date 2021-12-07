
const Person = ({userName, nickName, country}) => {
    return (
            <div className='info'>
                <h1>{userName}</h1>
                <p>{nickName}</p>
                <p>{country}</p>
            </div>
    );
};

export default Person;
