import * as yup from "yup";

export const chatbotPromptSchema = yup.object().shape({
  prompt: yup.string().min(2, "Prompt must be at least 2 characters"),
});
