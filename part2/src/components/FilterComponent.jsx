// eslint-disable-next-line react/prop-types
const  FilterComponent = ({filterWith, handleFilter}) => {
  return (
    <div>
      Filter shown with: <input value={filterWith} onChange={handleFilter}/> 
      <br/>
      <br/>
      <hr/>
    </div>
  )
}

export default FilterComponent