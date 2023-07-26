const Address = ({
  handleChange,
  neighbourhood,
  state,
  city,
  contact,
  email,
}) => {
  return (
    <>
      <div>
        <label htmlFor="neighbourhood">Near by</label>
        <input
          type="text"
          name="neighbourhood"
          id="neighbourhood"
          value={neighbourhood}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          id="state"
          value={state}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="abc@gmail.com"
          id="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="contact">Contact</label>
        <input
          type="tel"
          placeholder="phone no"
          pattern="[0-9]{10}"
          name="contact"
          id="contact"
          value={contact}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Address;
