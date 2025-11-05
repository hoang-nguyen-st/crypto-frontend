import { useState, useEffect } from "react";
import type { ValidationError } from "yup";
import { ApolloError, useMutation, useSubscription } from "@apollo/client";
import { CHAT, chatMessage } from "@/graphql";
import type { ChatMessage, Prompt } from "@/interfaces";
import { chatbotPromptSchema } from "@/validations";
import { toast } from "react-hot-toast";

const useInputPrompt = () => {
  const [dataPayload, setDataPayload] = useState<string>(
    "How can I help you today?"
  );
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const { data, loading } = useSubscription<ChatMessage>(chatMessage);
  const [chatMessageMutation] = useMutation<{ chat: boolean }, Prompt>(CHAT);

  const handleInputPrompt = async (
    prompt: string,
    clearCallback?: () => void
  ) => {
    try {
      await chatbotPromptSchema.validate({ prompt }, { abortEarly: false });
    } catch (error) {
      const err = error as ValidationError;
      if (err.inner && err.inner.length > 0) {
        err.inner.forEach((e) => {
          if (e.message) {
            toast.error(e.message, { position: "top-center" });
          }
        });
      }
      return;
    }
    setIsGenerating(true);
    setDataPayload("");
    await toast.promise(
      chatMessageMutation({
        variables: {
          input: { prompt },
        },
      }),
      {
        loading: "Generating response...",
        success: () => {
          setIsGenerating(false);
          clearCallback?.();
          return "Response generated successfully!";
        },
        error: (error: unknown) => {
          const apolloErr = error as ApolloError;
          return (
            apolloErr.graphQLErrors?.[0]?.message ||
            "An unexpected error occurred while generating response."
          );
        },
      }
    );
  };
  useEffect(() => {
    if (data?.chatMessage) {
      setDataPayload((prev) => prev + data.chatMessage);
      setIsGenerating(false);
    }
  }, [data]);
  return { loading, isGenerating, dataPayload, handleInputPrompt };
};

export { useInputPrompt };
