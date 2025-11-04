import { useState } from "react";

export const useCopy = () => {
  const [copied, setCopied] = useState(false);
  const onCopy = () => {
    setCopied(true);
  };

  setTimeout(() => {
    if (copied) {
      setCopied(false);
    }
  }, 4000);

  return { onCopy, copied };
};
