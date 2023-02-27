import { useState, useEffect } from "react";
import { getStoryList } from "../api";
import { StoryContent } from "../type";
import { REMAINED_NUMBER } from "../constants";

export const useStoryList = (topList: number[], showNumber: number) => {
  const [storyList, setStoryList] = useState<StoryContent[]>([]);
  const [isLoadingStory, setIsLoadingStory] = useState<boolean>(false);
  useEffect(() => {
    const handleLoadingStoryList = async (
      ids: number[]
    ): Promise<StoryContent[]> => {
      let newStoryList: StoryContent[] = [];
      try {
        newStoryList = await getStoryList(ids);
      } catch (err) {
        console.error(err);
      }
      return newStoryList;
    };
    const handleLazyLoading = async () => {
      if (
        topList.length > 0 &&
        showNumber > storyList.length &&
        !isLoadingStory
      ) {
        setIsLoadingStory(true);
        const idsForFetch = topList.slice(storyList.length, showNumber);
        const newStoryList = await handleLoadingStoryList(idsForFetch);
        setStoryList([...storyList, ...newStoryList]);
        setIsLoadingStory(false);
      }
    };
    handleLazyLoading();
  }, [topList, showNumber, storyList, isLoadingStory]);
  const firstStoryList = storyList.slice(0, showNumber - REMAINED_NUMBER);
  const lastStoryList = storyList.slice(
    showNumber - REMAINED_NUMBER,
    showNumber
  );
  return { firstStoryList, lastStoryList, isLoadingStory };
};
