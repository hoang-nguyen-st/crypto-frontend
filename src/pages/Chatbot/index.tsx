import { type FormEvent, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/contexts";
import axios from "axios";

const backendUrl = 'http://localhost:3001/api/llm-chat';

const Chatbot = () => {
  const { user } = useAuth();
  const promptRef = useRef<HTMLTextAreaElement>(null);
  const [aiResponse, setAiResponse] = useState<string>("Hello! How can I assist you today?");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userPrompt: string = promptRef.current?.value?.trim() || "";
    if (!userPrompt) {
      return;
    }
    setIsLoading(true);
    setAiResponse('Waiting'); 
    try {
      const response = await axios.post(backendUrl, {
        prompt: userPrompt
      });

      const responseContent: string = response.data.response;
      setAiResponse(responseContent);

      if (promptRef.current) {
        promptRef.current.value = "";
      }

    } catch (error) {
      console.error("Calling Error:", error);
      setAiResponse('Error while getting response.');
    } finally {
      setIsLoading(false); 
    }
  };
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Chatbot</h1>
        <p className="text-muted-foreground">
          Talk to your own Ai assistant!
        </p>
      </div>
      
      <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={user?.avatar} />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-foreground">Chatbot</p>
          </div>
        </div>
        <div 
          className="text-left text-base bg-gray-100 p-4 border-none w-full h-50 flex items-start"
        >
          <span className="leading-none">{aiResponse}</span>
        </div>
        <form onSubmit={handleSubmit}>
          <Textarea
            ref={promptRef}
            placeholder="Ask me anything!"
            className="min-h-[50px] resize-none border-border text-base"
          />

          <div className="flex items-center justify-end pt-4 border-t border-border">
            <Button
              className="bg-primary hover:bg-primary-hover button-right text-primary-foreground px-8 cursor-pointer"
              disabled={isLoading}
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
