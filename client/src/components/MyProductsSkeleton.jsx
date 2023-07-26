import { MyProductsSkeletonStyle } from "./style/MyProductsSkeleton.style";

const MyProductsSkeleton = () => {
  let arr = Array.from(Array(3));

  const skeleton = arr.map((item, index) => {
    return (
      <div key={index}>
        <div className="image skeleton-box"></div>
        <div className="info">
          <h2 className="skeleton-box"></h2>
          <span className="skeleton-box"></span>
          <p className="skeleton-box"></p>
          <p className="skeleton-box"></p>
          <p className="skeleton-box"></p>
          <p className="skeleton-box"></p>
        </div>
      </div>
    );
  });

  return <MyProductsSkeletonStyle>{skeleton}</MyProductsSkeletonStyle>;
};

export default MyProductsSkeleton;
