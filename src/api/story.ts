import axios from "axios";
import { StoryContent } from "../type";

export async function getTopStories(): Promise<number[]> {
  const res = await axios.get(
    `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
  );
  return res.data;
}

export async function getStoryList(ids: number[]): Promise<StoryContent[]> {
  const storyList = await Promise.all(
    ids.map(async (id) => {
      return axios
        .get(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        )
        .then((response) => response.data);
    })
  );
  return storyList;
}
