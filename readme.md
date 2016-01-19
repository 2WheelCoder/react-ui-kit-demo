# React UI Kit Demo

An example UI Kit for react with self-documenting components.

## Dev
run `gulp`

# Generate Docs
run `react-docgen ./ -o ./ComponentDocs.json`

## Tests
run `gulp test`

Inspired by [How we unit test React components using expect-jsx](https://blog.algolia.com/how-we-unit-test-react-components-using-expect-jsx/)

## Todo
- Auto-include new components from /components
- Leverage atomic design, react-style (see [Atomic Components: Managing Dynamic React Components using Atomic Design — Part 1](https://medium.com/@yejodido/atomic-components-managing-dynamic-react-components-using-atomic-design-part-1-5f07451f261f#.mwv13elu3]))
- Setup ability to include package via NPM and import single-components ala lodash