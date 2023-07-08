import type { ReactNode } from 'react';

type ISectionProps = {
  title?: ReactNode;
  children: ReactNode;
  noPadding?: boolean;
};

const Section = (props: ISectionProps) => (
  <div
    className={` max-w-screen-lg ${
      !props.noPadding ? `mx-auto px-3 py-6` : ''
    }`}
  >
    {props.title && (
      <div className="mb-6 text-2xl font-bold">{props.title}</div>
    )}

    {props.children}
  </div>
);

export { Section };
