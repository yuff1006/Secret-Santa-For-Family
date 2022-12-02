export default function NewGame() {
  return (
    <div className='new'>
      <form className='new__nameform'>
        <input
          type='text'
          className='new__input input-field'
          placeholder='Type one name at a time'
        />
        <button type='submit' className='new__namebutton button'>
          Submit
        </button>
      </form>
      <div className='new__list'>
        <p className='new__name'>Shelly</p>
        <p className='new__name'>Shelly</p>
        <p className='new__name'>Shelly</p>
        <p className='new__name'>Shelly</p>
      </div>

      <p className='new__error'>Something went wrong...</p>
      <button className='new__alldone button'>All Done!</button>
    </div>
  );
}
