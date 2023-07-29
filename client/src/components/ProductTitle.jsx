const ProductTitle = ({ handleChange, title, description, price }) => {
  return (
    <>
      <div>
        <label htmlFor="title">Ad Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          min={0}
          id="price"
          value={price}
          onChange={handleChange}
        />
      </div>
      <div className="product_category">
        <label htmlFor="category">Category</label>
        <select id="category" onChange={handleChange} name="category">
          <option value={""} hidden>
            select category
          </option>
          <option value={"electronic"}>Electronic</option>
          <option value={"automobile"}>Auto Mobile</option>
          <option value={"bike"}>Bike</option>
          <option value={"book"}>Book</option>
          <option value={"sport"}>Sport</option>
          <option value={"job"}>Job</option>
          <option value={"property"}>Property</option>
          <option value={"Other "}>Other</option>
        </select>
      </div>
    </>
  );
};

export default ProductTitle;
