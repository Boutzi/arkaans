import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.arkaans.com",
      lastModified: new Date(),
      alternates: {
        languages: {
          fr: "https://www.arkaans.com",
          en: "https://www.arkaans.com/en",
        },
      },
    },
  ];
}
