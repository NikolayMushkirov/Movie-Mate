import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ContentWrapper = ({ children }: Props) => {
  return <div className="max-w-screen-1200 mx-auto">{children}</div>;
};

export default ContentWrapper;
