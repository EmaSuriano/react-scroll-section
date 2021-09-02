# react-scroll-section

[![Master](https://github.com/EmaSuriano/react-scroll-section/actions/workflows/master.yml/badge.svg)](https://github.com/EmaSuriano/react-scroll-section/actions/workflows/master.yml)
[![npm version](https://img.shields.io/npm/v/react-scroll-section.svg)](https://www.npmjs.org/package/react-scroll-section)
[![Netlify Status](https://api.netlify.com/api/v1/badges/8e8c9915-5b0a-4cde-83e7-13747fb01f30/deploy-status)](https://app.netlify.com/sites/react-scroll-section/deploys)

<p align="center">
  <img src="./docs/logo.svg" alt="React Scroll Section logo"/>
</p>

<h3 align="center">A declarative solution to vertically navigate your React App</h3>

## [Live demo ✨](https://react-scroll-section.netlify.app/)

## Why you should use it? 🤔

When you think about implementing a `scrollTo` functionality in a website the first thing it will your mind will be jQuery, using the following line of code:

```javascript
$('#target').scroll();
```

I won't deny that actually works, but the problem comes when you start working with frameworks based on component, like React.

Manage the navigation to another section and which section can be hard task without a state management library.

This library will help you to avoid thinking all the possible edges cases and focus on the final result, which is just provide an easy navigation inside your app.

## Built with 🔧

Just React! Using the following API:

- Context: using the of `<Consumer />` and `<Provider />`.
- Ref: new `createRef` API
- Hooks: `useScrollSection` and `useScrollSections` to interact with the registered sections.

## Installation

```bash
# npm
> npm install react-scroll-section

# yarn
> yarn add react-scroll-section
```

## Usage

The library provides the following components:

- `ScrollingProvider`: responsible to link `Section` and `SectionLink` and know which `Section` is selected.
- `Section`: renders a `<section />` tag that receives an ID and register itself in `ScrollingProvider`.
- `useScrollSection`: React Hook given the `id` of the section returns if the section is `selected` and a callback to scroll to it.
- `useScrollSection`: returns an array of all the `sections` with `id`, `selected` and `scrollTo`.

## Examples

### Using `SectionLink` (Static Menu)

```javascript
import React from 'react';
import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from 'react-scroll-section';

const StaticMenu = () => {
  const homeSection = useScrollSection('home');
  const aboutSection = useScrollSection('about');

  return (
    <ul>
      <li onClick={homeSection.onClick} selected={homeSection.selected}>
        Home
      </li>
      <li onClick={aboutSection.onClick} selected={aboutSection.selected}>
        About
      </li>
    </ul>
  );
};

const App = () => (
  <ScrollingProvider>
    <StaticMenu />
    <Section id="home">MY HOME</Section>
    <Section id="about">ABOUT ME</Section>
  </ScrollingProvider>
);
```

### Using `SectionLinks` (Dynamic Menu)

```javascript
import React from 'react';
import {
  ScrollingProvider,
  useScrollSections,
  Section,
} from 'react-scroll-section';

export const DynamicMenu = () => {
  const sections = useScrollSections();

  return (
    <ul>
      {sections.map(({ id, onClick, selected }) => (
        <li key={id} onClick={onClick} selected={selected}>
          {id.toUpperCase()}
        </li>
      ))}
    </ul>
  );
};

const App = () => (
  <ScrollingProvider>
    <DynamicMenu />
    <Section id="home">Home section</Section>
    <Section id="about">About section</Section>
  </ScrollingProvider>
);
```

## Props

### ScrollingProvider

| Property         | Type                         | Required | Default  | Description                                               |
| ---------------- | ---------------------------- | -------- | -------- | --------------------------------------------------------- |
| `debounceDelay`  | `number`                     | false    | 50       | time to wait until the calculation of the current section |
| `scrollBehavior` | [`string`][scroll-behaviour] | false    | "smooth" | scrolling style                                           |
| `children`       | `ReactNode`                  | false    | null     | React component                                           |
| `offset`         | `number`                     | false    | null     | Vertical offset the modifies the final scrolling position |

[scroll-behaviour]: https://developer.mozilla.org/de/docs/Web/CSS/scroll-behavior

### Section

| Property   | Type        | Required | Default | Description     |
| ---------- | ----------- | -------- | ------- | --------------- |
| `children` | `ReactNode` | false    | null    | Section content |
| `id`       | `string`    | true     | -       | Section ID      |

## Contributing

### Setup project

- Running `yarn install` in the component's root directory will install everything you need for development.

### Demo Development Server

- `yarn start`: starts the development server with the component's demo app at [http://localhost:3000](http://localhost:3000).

### Testing

- `yarn test`: executes Cypress and run test. Remember to execute `yarn start` in order to have a successful result.
- `yarn test:open`: opens Cypress interface which allows you to execute test individually and preview the order execution of the tests.

### Building

- `yarn build`: builds the library, this is necessary to be published to npm.

## Contribute ❤️

I'm always open for suggestions and improvements, so don't hesitate to open an Issue or new Pull Request 😁

## License 🔖

MIT.
