import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useInputPrompt } from "@/hooks";
import { useRef, type FormEvent } from "react";
import toast from "react-hot-toast";

const Chatbot = () => {
  const promptRef = useRef<HTMLTextAreaElement>(null);
  const { isGenerating, dataPayload, handleInputPrompt } = useInputPrompt();

  const handleSubmit = async (e?: FormEvent) => {
    if (e) e.preventDefault();
    const prompt = promptRef.current?.value.trim();
    const randomNumber = Math.random();
    const threshold = 0.99;
    const clearPrompt = () => {
      if (promptRef.current) {
        promptRef.current.value = "";
      }
    };
    if (prompt) {
      handleInputPrompt(prompt, clearPrompt);
    } else {
      if (randomNumber < threshold) {
        toast.error("Prompt is required", { position: "top-center" });
      } else {
        toast.error("PROMPT IS REQUIRED", { position: "top-center" });
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const el = promptRef.current;
    if (!el) return;

    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      const { selectionStart, selectionEnd, value } = el;
      el.value =
        value.slice(0, selectionStart) + "\n" + value.slice(selectionEnd);
      el.selectionStart = el.selectionEnd = selectionStart + 1;
      return;
    }

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Chatbot</h1>
        <p className="text-muted-foreground">Talk to your own AI assistant!</p>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
        <div className="flex items-center gap-3">
          <div>
            <p className="font-semibold text-foreground">Chatbot</p>
          </div>
        </div>

        <div className="text-left text-base bg-gray-100 dark:bg-gray-800 p-4 border-none w-full min-h-[200px] flex items-start rounded-lg">
          <span className="leading-relaxed whitespace-pre-wrap">
            {dataPayload}
            {isGenerating && !dataPayload && (
              <span className="inline-block w-2 h-5 bg-gray-400 animate-pulse ml-1" />
            )}
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          <Textarea
            ref={promptRef}
            placeholder="Ask me anything!"
            className="min-h-[100px] resize-none border-border text-base"
            disabled={isGenerating}
            onKeyDown={handleKeyDown}
          />

          <div className="flex items-center justify-end pt-4 border-t border-border">
            <Button
              type="submit"
              disabled={isGenerating}
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? "Generating..." : "Send"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
