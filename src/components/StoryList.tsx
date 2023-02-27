import { FC } from "react";
import { useTopList } from "../hook/useTopList";
import { useStoryList } from "../hook/useStoryList";
import { useShowNumber } from "../hook/useShowNumber";
import { LoadingIndicator } from "./LoadingIndicator";
import { SubStoryList } from "./SubStoryList";

import styles from "./StoryList.module.css";

export const StoryList: FC = () => {
  const { isLoadingTopList, topList } = useTopList();
  const { showNumber, containerRef, infiniteLoaderRef } =
    useShowNumber(topList);
  const { firstStoryList, lastStoryList, isLoadingStory } = useStoryList(
    topList,
    showNumber
  );
  const isLoading = isLoadingTopList || isLoadingStory;

  return (
    <div className={styles.container}>
      <div className={styles.storyListContainer} ref={containerRef}>
        <SubStoryList storyList={firstStoryList} />
        <div ref={infiniteLoaderRef} style={{ height: "2px" }}></div>
        <SubStoryList storyList={lastStoryList} />
        {isLoading && (
          <LoadingIndicator fullWidth={firstStoryList.length === 0} />
        )}
      </div>
    </div>
  );
};
