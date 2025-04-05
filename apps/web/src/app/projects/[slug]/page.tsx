import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { metadata as meta } from "@/app/config";
import { project } from "@/app/source";
import { MDXLink } from "@/lib/mdx/default-components";
import { createMetadata } from "@/lib/metadata";
import { MDXContent } from "@content-collections/mdx/react";
import defaultMdxComponents from "fumadocs-ui/mdx";

import Header from "./header";

export function generateStaticParams({ params }: { params: { slug: string } }) {
  const { slug } = params;
  // @ts-expect-error issue with fumadocs
  return project.generateParams([slug]);
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { slug } = params;
  const page = project.getPage([slug]);
  if (!page) notFound();

  return createMetadata({
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      type: "article",
      images: [
        {
          alt: "banner",
          width: 1200,
          height: 630,
          url: `/images/projects/${slug}/cover.jpg`,
          type: "image/png",
        },
      ],
      authors: meta.author.name,
    },
    twitter: {
      images: [
        {
          alt: "banner",
          width: 1200,
          height: 630,
          url: `/images/projects/${slug}/cover.jpg`,
        },
      ],
    },
  }) satisfies Metadata;
}

export default async function ProjectPage(props0: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props0.params;
  const { slug } = params;
  const page = project.getPage([slug]);
  if (!page) notFound();

  const {
    data: { body },
  } = page;

  return (
    <main className="my-14 flex-1">
      <div className="container mx-auto">
        <Header metadata={page.data} />
        {/* Removed the Image component */}
        <div className="prose min-w-full">
          <MDXContent
            code={body}
            components={{
              ...defaultMdxComponents,
              a: MDXLink,
            }}
          />
        </div>
      </div>
    </main>
  );
}
