// The words on the page live in this file.
// With `npm run dev` running, save this file and the browser updates the site.
// The large heading is hero.title. The top menu labels are navItems.

export const siteName = 'Zosh'

export const navItems = [
  { href: '#work', label: 'Work' },
  { href: '#approach', label: 'Approach' },
  { href: '#contact', label: 'Contact' },
] as const

export const hero = {
  eyebrow: 'Studio',
  title: 'A calmer kind of website.',
  lede: 'Zosh makes single-page sites with one clear story: a few strong sections, careful type, and a way to get in touch.',
  primary: { href: '#work', label: 'View the work' },
  secondary: { href: '#contact', label: 'Start a note' },
} as const

export const highlights = [
  { label: 'Format', value: 'One page, read from top to bottom' },
  { label: 'Focus', value: 'Work, approach, and contact' },
  { label: 'Care', value: 'Interactions checked with unit tests' },
] as const

export const workItems = [
  {
    title: 'Page craft',
    summary:
      'Structure, type, and pacing so a visitor can finish the page without hunting for the point.',
  },
  {
    title: 'Interface detail',
    summary:
      'Navigation, forms, and states that behave the way they look, including when something is missing.',
  },
  {
    title: 'Front-end foundation',
    summary:
      'A current React and Node toolchain, with the page and its tests living in the same project.',
  },
] as const

export const approachSteps = [
  {
    title: 'Name the job of the page',
    summary: 'Decide the one thing a visitor should understand or do before adding anything else.',
  },
  {
    title: 'Design the path first',
    summary: 'Put the sections in reading order, then let color and type support that order.',
  },
  {
    title: 'Prove the interactions',
    summary: 'Cover the form and the page structure with tests so later edits keep the same promises.',
  },
] as const
