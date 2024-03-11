# micro-animation-library

A small library providing easy-to-use animations for web projects, leveraging GSAP, anime.js, AOS, and more to offer a variety of animations with simple API calls.

## Installation

To install micro-animation-library, run the following command in your project directory:

```bash
npm install micro-animation-library
```

## Usage

First, import the library into your project:

```javascript
import { animations } from 'micro-animation-library';
```

Then, you can easily add animations to your elements. Here are some examples:

### Fade In

```javascript
animations.fadeIn('.my-element', 1); // fades in the element over 1 second
```

### Slide In from Left

```javascript
animations.slideInLeft('.my-element', 1); // slides in from the left over 1 second
```

### Zoom In

```javascript
animations.zoomIn('.my-element', 800); // zooms in the element over 800 milliseconds
```

### Rotate

```javascript
animations.rotate('.my-element', 1000); // rotates the element over 1000 milliseconds
```

### On Scroll Fade In

```javascript
animations.onScrollFadeIn('.my-element'); // fades in the element on scroll
```

### Draggable

```javascript
animations.draggable('.my-element'); // makes the element draggable
```

## Contributing

Contributions are welcome! If you have an idea for an improvement or find a bug, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

This library leverages the power of the following dependencies:
- GSAP
- anime.js
- AOS
- ScrollMagic
- Popmotion

Thank you to the creators and contributors of these libraries for their fantastic work.
