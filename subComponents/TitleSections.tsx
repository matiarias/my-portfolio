import type { TitleSectionsProps } from "@/types";

const TitleSections = ({ title }: TitleSectionsProps) => {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      <div aria-hidden="true" />
    </div>
  );
};

export default TitleSections;
