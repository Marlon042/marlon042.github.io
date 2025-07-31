// src/app/blogs/[slug]/page.tsx

import { promises as fs } from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import { Metadata } from 'next';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  description: string;
  content: string;
}

// Define los props esperados para la página dinámica
interface PageProps {
  params: {
    slug: string;
  };
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const blogsDirectory = path.join(process.cwd(), 'content', 'blogs');
  const filePath = path.join(blogsDirectory, `${slug}.json`);

  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    return null;
  }
}

// Exportar correctamente los parámetros estáticos para la generación de rutas
export async function generateStaticParams(): Promise<PageProps["params"][]> {
  const blogsDirectory = path.join(process.cwd(), 'content', 'blogs');
  const filenames = await fs.readdir(blogsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.json$/, ''),
  }));
}

// Opcional: agregar metadatos por página
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: 'No encontrado',
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

// Página principal del blog
export default async function BlogPostPage({ params }: PageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="container py-section">
      <SectionHeading
        title={post.title}
        subtitle={`Por ${post.author} el ${new Date(post.date).toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}`}
      />
      <div className="prose dark:prose-invert max-w-none">
        <p>{post.content}</p>
      </div>
    </section>
  );
}
