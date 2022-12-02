export default function ExistingGame() {
  return (
    <div className='existinggame'>
      <form className='existinggame__form'>
        <input
          type='text'
          placeholder='Game Token'
          className='existinggame__input input-field'
        />
        <input
          type='text'
          placeholder='Secret Key'
          className='existinggame__input input-field'
        />
        <button type='submit' className='existinggame__button button'>
          Submit
        </button>
      </form>
      <p className='gametoken-error'>
        Oops, wrong game token and/or secret key.
      </p>
    </div>
  );
}
