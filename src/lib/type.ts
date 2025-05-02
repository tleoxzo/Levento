
  export type Post = {
    id: number;
    date: string;
    title: {
      rendered: string;
    };
    comment_status: string;
    categories: number;
    content: {
      rendered: string;
      protected: boolean;
    };
    excerpt: string;
    slug: string;
    rttpg_excerpt: string;
    rttpg_featured_image_url: {
      full: string[];
    };
  };

  export type PostsResponse = {
    posts: Post[];
  };