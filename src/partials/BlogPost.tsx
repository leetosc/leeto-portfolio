import type { ReactNode } from 'react';

import { PostContent } from '@/components/PostContent/PostContent';
import { PostHeader } from '@/components/PostHeader/PostHeader';
import { Section } from '@/components/Section/Section';
import type { IFrontmatter } from '@/types/IFrontMatter';
import { AppConfig } from '@/utils/AppConfig';

type IBlogPostProps = {
  frontmatter: IFrontmatter;
  children: ReactNode;
};

const BlogPost = (props: IBlogPostProps) => (
  <div className="pt-20">
    <Section>
      <PostHeader content={props.frontmatter} author={AppConfig.author} />

      <PostContent content={props.frontmatter}>{props.children}</PostContent>
    </Section>
  </div>
);

export { BlogPost };
