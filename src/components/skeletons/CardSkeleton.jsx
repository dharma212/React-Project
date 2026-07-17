import Skeleton from 'react-loading-skeleton';

function CardSkeleton() {
  return (
    <div className="card">
      <Skeleton height={200} />
      <Skeleton height={25} style={{ marginTop: '10px' }} />
      <Skeleton count={2} />
    </div>
  );
}

export default CardSkeleton;