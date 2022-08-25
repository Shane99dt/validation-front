const Select = ({ label, labelId, onSelectChange }) => {
  const selectOptions = ["paris", "los-angeles", 'tokyo']

  return(

    <div className="w-full md:w-1/2 mb-6 px-3 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={labelId}>
        {label}
      </label>
      <select className="block appearance-none w-full bg-gray-200 border border-gray-600 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 capitalize" id={labelId} onChange={onSelectChange} required>
        <option value="">Select an option</option>
        {selectOptions.map(city => {
          return <option key={city} value={city}>{city}</option>
        })}
      </select>
    </div>
  )
}

export default Select