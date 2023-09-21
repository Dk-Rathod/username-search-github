export default function Form({ onSubmit, onChange, value }) {
    return (
      <form className="search-form" onSubmit={onSubmit}>
        <input
          id="search"
          type="text"
          placeholder="Enter username"
          onChange={onChange}
          value={value}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
  