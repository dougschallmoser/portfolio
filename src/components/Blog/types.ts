export type IPost = {
  link: string;
  title: string;
  pubDate: string;
}

export interface BlogItemProps {
  data: {
    link: string;
    title: string;
    pubDate: string;
  };
  key: string;
}