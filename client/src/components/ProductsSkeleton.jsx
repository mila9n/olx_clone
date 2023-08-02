import { ProductSkeletonCardStyle } from "./style/ProductSkeletonCard";

const ProductsSkeleton = () => {
  // let arr = Array.from(Array(8));

  return (
    <ProductSkeletonCardStyle>
      <div className="image skeleton-box"></div>
      <div className="info">
        <h2 className="skeleton-box"></h2>
        <p className="skeleton-box"></p>
        <p className="skeleton-box"></p>
        <p className="skeleton-box"></p>
      </div>
    </ProductSkeletonCardStyle>
  );
};

export default ProductsSkeleton;
