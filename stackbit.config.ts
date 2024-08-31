// stackbit.config.ts
import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["scripts", "CSS", "images"],
      models: [
        {
          name: "IndexPage",
          type: "page",
          urlPath: "/",
          filePath: "index.html",
          fields: [
            {
              name: "header",
              type: "object",
              fields: [
                { name: "title", type: "string", required: true },
                {
                  name: "nav",
                  type: "list",
                  items: { type: "string" },
                },
              ],
            },
            {
              name: "textBlocks",
              type: "list",
              items: { type: "string" },
            },
            {
              name: "carousel",
              type: "list",
              items: {
                type: "object",
                fields: [
                  { name: "image", type: "image", required: true },
                  { name: "caption", type: "string" },
                ],
              },
            },
            {
              name: "form",
              type: "object",
              fields: [
                {
                  name: "nameFieldLabel",
                  type: "string",
                  label: "Name Field Label",
                  required: true,
                },
                {
                  name: "emailFieldLabel",
                  type: "string",
                  label: "Email Field Label",
                  required: true,
                },
                {
                  name: "messageFieldLabel",
                  type: "string",
                  label: "Message Field Label",
                  required: true,
                },
                {
                  name: "submitButtonLabel",
                  type: "string",
                  label: "Submit Button Label",
                  required: true,
                },
              ],
            },
          ],
        },
      ],
      assetsConfig: {
        referenceType: "relative",
        assetsDir: "/",
        uploadDir: "images",
        publicPath: "/",
      },
    }),
  ],
});
