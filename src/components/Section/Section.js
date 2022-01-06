import PropTypes from "prop-types";

export default function Section({ items }) {
  return (
    <Section>
      {items.map(
        (item) => item.title && '<h2 className="title">{item.title}</h2>'
      )}
    </Section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
