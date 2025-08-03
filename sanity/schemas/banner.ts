import { defineField, defineType } from "sanity";

export default defineType({
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
    defineField({ name: "price", title: "Price", type: "number" }),
    defineField({ name: "description", title: "Description", type: "string" }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "Banner Image",
      options: {
        hotspot: true,
      },
      preview: {
        select: {
          title: "caption",
          imageUrl: "asset.url",
        },
      },
    }),
  ],
});
