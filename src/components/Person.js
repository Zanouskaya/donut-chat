import Avatar from './Avatar'

const Person = ({userName, nickName, country}) => {
    return (
        <div className='person'>
            <Avatar/>
            <div className='info person'>
                <h1>{userName}</h1>
                <p>{nickName}</p>
                <p>{country}</p>
            </div>
        </div>

    );
};

export default Person;