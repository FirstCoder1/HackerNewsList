import { FC } from "react";
import "./LoadingIndicator.css";
import { LoadingImage } from "../assets/LoadingImage";

interface LoadingIndicatorProps {
  fullWidth: boolean;
}

export const LoadingIndicator: FC<LoadingIndicatorProps> = ({ fullWidth }) => {
  return (
    <div
      className="spinnerContainer"
      style={{
        position: fullWidth ? "absolute" : "relative",
        height: fullWidth ? "calc(100% - 128px)" : "60px",
      }}
    >
      <LoadingImage />
    </div>
  );
};
