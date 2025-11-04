import { useState, type ChangeEvent } from "react";

const useInputPrompt = () => {
  const [prompt, setPrompt] = useState<string>("");

  const handlePromptChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  return {
    prompt,
    handlePromptChange,
  };
};

export { useInputPrompt };
