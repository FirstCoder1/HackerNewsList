import { FC, memo } from "react";
import { StoryContent } from "../type";

import styles from "./Story.module.css";

interface ContentElementProps {
  label: string;
  text?: string | number;
}
const ContentElement: FC<ContentElementProps> = ({ label, text }) =>
  text ? (
    <div className={styles.contentElementContianer}>
      <span className={styles.label}>{`${label}:  `}</span>
      <span className={styles.text}>{`${text}`}</span>
    </div>
  ) : (
    <></>
  );

interface StoryProps {
  content: StoryContent;
}

export const Story: FC<StoryProps> = memo(({ content }: StoryProps) => {
  return (
    <div className={styles.storyContainer}>
      <h2>{content.title}</h2>
      <div className={styles.storyContentContainer}>
        <ContentElement label="Writer" text={content.by} />
        <ContentElement
          label="Prosted at"
          text={new Date(content.time * 1000).toString()}
        />
        <ContentElement label="Score" text={content.score} />
        {content.text && (
          <div>
            <div>{`Content Text: `}</div>
            <div className={styles.contentText}>
              <span
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: content.text ?? "" }}
              />
            </div>
          </div>
        )}
        {content.url && (
          <a href={content.url} target="_blank" rel="noreferrer">
            Navigate to the actual page
          </a>
        )}
      </div>
    </div>
  );
});
