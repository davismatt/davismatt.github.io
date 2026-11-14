// Section heading. The decorative "< ... > </>" brackets come from CSS
// pseudo-elements, so the heading text itself stays clean for crawlers
// and screen readers.
const SectionHeading = ({ children, light = false }) => (
  <h2 className={`header_med${light ? ' light' : ''}`}>{children}</h2>
)

export default SectionHeading
