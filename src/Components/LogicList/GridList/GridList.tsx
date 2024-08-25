import { LottieHandler } from "@/Components/Feedback/LottiHandler/LottiHandler";

type GridListProps<T> = {
  records: T[];
  renderItem: (record: T) => JSX.Element;
  emptyMessage: string;
};

const GridList = <T extends { id?: number }>({
  emptyMessage,
  records,
  renderItem,
}: GridListProps<T>) => {
  const renderList =
    records.length > 0 ? (
      records.map((record) => (
        <div
          key={record.id}
          className="d-flex justify-content-center mb-5 mt-2"
        >
          {renderItem(record)}
        </div>
      ))
    ) : (
      <LottieHandler type="empty" message={emptyMessage} />
    );
  return <div>{renderList}</div>;
};

export default GridList;