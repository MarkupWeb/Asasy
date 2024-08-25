"use client"

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import {
  actGetCategories,
  categoriesRecordsCleanUp,
} from "@/Redux/features/categories/categoriesSlice";

const useCategories = () => {
  const dispatch = useAppDispatch();

  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );


  useEffect(() => {
    dispatch(actGetCategories());

    return () => {
      dispatch(categoriesRecordsCleanUp());
    };
  }, [dispatch]);

  return { loading, error, records };
};

export default useCategories;
