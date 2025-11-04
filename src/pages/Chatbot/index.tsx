import { useEffect, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAiMessage } from "@/hooks";

const Chatbot = () => {
  const promptRef = useRef<HTMLTextAreaElement>(null);
  const [dataPayload, setDataPayload] = useState<string>(
    "How can I help you today?"
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const { data, chatMessageMutation } = useAiMessage();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const prompt = promptRef.current?.value.trim();

    if (prompt && prompt.length > 5) {
      setDataPayload("");
      setIsGenerating(true);

      try {
        await chatMessageMutation({
          variables: {
            input: { prompt },
          },
        });
      } catch (error) {
        console.error("Error sending message:", error);
        setDataPayload("Sorry, something went wrong. Please try again.");
        setIsGenerating(false);
      }

      if (promptRef.current) {
        promptRef.current.value = "";
      }
    }
  };

  useEffect(() => {
    if (data?.chatMessage) {
      setDataPayload((prev) => prev + data.chatMessage);
      setIsGenerating(false);
    }
  }, [data]);

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

        <div className="text-left text-base bg-gray-100 p-4 border-none w-full min-h-[200px] flex items-start rounded-lg">
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
