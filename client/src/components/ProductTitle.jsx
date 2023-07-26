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
    </>
  );
};

export default ProductTitle;
