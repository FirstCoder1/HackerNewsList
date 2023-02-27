import { useState, useEffect } from "react";
import { getTopStories } from "../api";

export const useTopList = () => {
  const [topList, setTopList] = useState<number[]>([]);
  const [isLoadingTopList, setIsLoadingTopList] = useState<boolean>(false);

  useEffect(() => {
    const getTopList = async (): Promise<void> => {
      let fetchedTopList: number[];
      setIsLoadingTopList(true);
      try {
        fetchedTopList = await getTopStories();
      } catch (err) {
        fetchedTopList = [];
        console.error(err);
      }
      setTopList(fetchedTopList);
      setIsLoadingTopList(false);
    };
    getTopList();
  }, []);
  return { isLoadingTopList, topList };
};
