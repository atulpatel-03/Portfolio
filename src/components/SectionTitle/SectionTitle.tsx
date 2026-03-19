interface SectionTitleProps {
  number: string;
  title: string;
}

const SectionTitle = ({ number, title }: SectionTitleProps) => {
  return (
    <h2 className="section_title">
      <span className="section_number">{number}.</span> {title}
    </h2>
  );
};

export default SectionTitle;
