import Button from './Button.jsx';

// eslint-disable-next-line react/prop-types
const Person = ({name, number, text, onClick}) => {

    return (
        <div >
        <p>{name} {number}</p>
        <Button text={text} onClick={onClick}/>
        <hr/>
        </div>
    )
}

export default Person;