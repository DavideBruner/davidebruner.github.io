export type Data<T> = T & {
  content: any;
};

export type Link = {
  name: string
  path: string
}
export interface Post {
  id: string
  user: string
  date: string
  title: string
  description: string
  slug: string
  image: any
  summary: string
  readingTime: string
  publishedAt: any
  readTime: string
  tags: string[]
}

export interface Project {
  id: string
  user: string
  date: string
  title: string
  description: string
  slug: string
  github?: string
  link: string
  linkText?: string
  image: any
  small?: boolean
  priority?: boolean
}