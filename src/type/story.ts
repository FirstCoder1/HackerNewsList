export type StoryContent = {
  id: number;
  deleted?: boolean;
  type?: string;
  by?: string;
  time: number;
  text?: string;
  dead?: boolean;
  parent?: number;
  poll?: string;
  kids?: number[];
  url?: string;
  score?: number;
  title?: string;
  parts?: string[];
  descendants?: number;
};
