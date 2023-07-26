import { ProductsSkeletonStyle } from "./style/ProductSkeleton.style";

const ProductsSkeleton = () => {
  let arr = Array.from(Array(8));

  let skeletons = arr.map((item, index) => {
    return (
      <div key={index}>
        <div className="image skeleton-box"></div>
        <div className="info">
          <h2 className="skeleton-box"></h2>
          <p className="skeleton-box"></p>
          <p className="skeleton-box"></p>
          <p className="skeleton-box"></p>
        </div>
      </div>
    );
  });

  return <ProductsSkeletonStyle>{skeletons}</ProductsSkeletonStyle>;
};

export default ProductsSkeleton;
