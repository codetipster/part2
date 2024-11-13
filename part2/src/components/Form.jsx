// eslint-disable-next-line react/prop-types
const Form = ({onSubmit, value1, value2, onChange1, onChange2 }) => {
    return (
        <form onSubmit={onSubmit}>
        <div>
          Enter Name: <input value={value1} onChange={onChange1}/>
        </div>
        <div>Enter Number: <input value={value2} onChange={onChange2}/></div>
        <br/>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default Form