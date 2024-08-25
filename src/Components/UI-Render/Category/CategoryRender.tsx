"use client"
import CategoryCard  from "./CategoryCard";
import GridList   from "@/Components/LogicList/GridList/GridList";
import  Heading  from "@/Components/Common/Heading/Heading";
import Loading  from "@/Components/Feedback/Loading/Loading";
import { TCategory } from "@/types";
import useCategories from "./useCategories";
import SliderList from "@/Components/LogicList/SliderList/SliderList";

const CategoryRender = () => {
  const { loading, error, records } = useCategories();

  return (
    <>
    <div className="container">
      <Heading title="Categories" />
      <Loading status={loading} error={error} type="category">
        <SliderList
          emptyMessage="There are no categories"
          records={records}
          renderItem={(record) => <CategoryCard {...record} />}
        />
      </Loading>
      </div>
    </>
  );
};
export default CategoryRender;
