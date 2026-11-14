// Renders a section heading styled as a self-closing JSX tag, e.g. <AboutMe />.
// The angle brackets are CSS pseudo-elements, so the heading's text content
// stays readable and aria-label gives screen readers the spaced-out phrase.
const SectionHeading = ({ children, light = false }) => {
  const label = String(children)
  return (
    <h2 className={`header_med${light ? ' light' : ''}`} aria-label={label}>
      {label.replace(/\s+/g, '')}
    </h2>
  )
}

export default SectionHeading
