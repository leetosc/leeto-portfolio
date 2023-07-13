import type { ReactNode } from 'react';

type IProjectProps = {
  img: {
    src: string;
    alt: string;
  };
  name: string;
  description: string;
  link: string;
  category: ReactNode;
  pageLink?: string;
};

const Project = ({
  link,
  img,
  name,
  category,
  description,
  pageLink,
}: IProjectProps) => (
  <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
    <div className="shrink-0">
      <a href={link} target={link.charAt(0) === '/' ? '_self' : '_blank'}>
        <img
          className="h-36 w-36 object-cover hover:translate-y-1"
          src={img.src}
          alt={img.alt}
          loading="lazy"
        />
      </a>
    </div>

    <div className="w-full">
      <div className="flex flex-col items-center gap-y-2 md:flex-row">
        <a
          className="hover:text-cyan-400"
          href={link}
          target={link.charAt(0) === '/' ? '_self' : '_blank'}
        >
          <div className="text-xl font-semibold">{name}</div>
        </a>
      </div>
      <div className="my-4 flex flex-wrap justify-center gap-2 md:justify-start">
        {category}
      </div>

      <p className="mt-3 text-gray-400">{description}</p>
      {pageLink && (
        <p className="mt-3 text-gray-300 transition hover:text-gray-400">
          <a href={`/projects/${pageLink}`}>More Info </a>
        </p>
      )}
    </div>
  </div>
);

export { Project };
