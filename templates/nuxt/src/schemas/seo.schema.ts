import { z } from "zod";

export const MetadataSchema = z.object({
  id: z.string(),
  title: z.string(),
  meta_description: z.string(),
  og_image: z.string(),
});

export type MetadataType = z.infer<typeof MetadataSchema>;
