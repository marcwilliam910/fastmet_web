import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().trim().max(70).optional(),
  email: z.email("Invalid email address"),
  message: z.string().trim().min(5, "Message is too short").max(2000),
});
