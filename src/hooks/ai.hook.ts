import { useMutation, useSubscription } from "@apollo/client";
import { chatMessage, CHAT } from "@/graphql";
import type { ChatMessage, Prompt } from "@/interfaces";

export const useAiMessage = () => {
  const { data, loading } = useSubscription<ChatMessage>(chatMessage);

  const [chatMessageMutation] = useMutation<{ chat: boolean }, Prompt>(CHAT);

  return {
    data,
    loading,
    chatMessageMutation,
  };
};
