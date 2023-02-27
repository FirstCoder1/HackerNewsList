import { FC } from "react";
import { StoryContent } from "../type";
import { Story } from "./Story";

type SubStoryListProps = { storyList: StoryContent[] };

export const SubStoryList: FC<SubStoryListProps> = ({ storyList }) => (
  <>
    {storyList.map((storyContent: StoryContent) => (
      <Story key={storyContent.id} content={storyContent} />
    ))}
  </>
);
