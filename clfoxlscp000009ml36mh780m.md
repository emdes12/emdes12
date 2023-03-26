---
title: "Add Depth and Motion to Your Design with CSS Blur Effects"
seoTitle: "Mastering CSS Blur Effects: A Guide to Gaussian and Glass Blur |"
seoDescription: "Learn how to create stunning visual effects with CSS blur. Our guide covers two types of blur - Gaussian and Glass - with step-by-step instructions and code"
datePublished: Sun Mar 26 2023 05:00:13 GMT+0000 (Coordinated Universal Time)
cuid: clfoxlscp000009ml36mh780m
slug: add-depth-and-motion-to-your-design-with-css-blur-effects
tags: css, web-development, ui, frontend-development, blur-effect

---

# **BLUR EFFECT IN CSS**

Blur is a popular visual effect in web design that can help draw attention to certain elements or create a sense of depth and motion.

## ***TYPES OF BLUR***

In CSS, there are several types of blur effects you can apply to elements, for me I do categorise blur into two, the Gaussian Blur (or Feather Blur) and Glass Blur (or Screen blur)

### *GAUSSIAN BLUR*

Gaussian/Feather Blur is the type of effect creates a smooth, soft blur effect around the edges of an element, resembling the way things appears when they are out of focus. It effect can be achieve using the `filter` property with value of `blur()` function. Example:

HTML

```xml
<div class="feather-blur"></div>
```

CSS

```css
.feather-blur {
  background-color: #cea;
  filter: blur(30px);
}
```

### *GLASS BLUR*

Glass/Screen blur is the type of blur effect that simulates the blurring of an element behind a frosted glass surface. It's a combination of the Gaussian Blur and noise giving the impression of small air bubbles or scratches on the surface. This effect can be achieve using the `backdrop-filter` property with the value of `blur()` functions. Example:

HTML

```xml
<div class="glass-blur"></div>
```

CSS

```css
.glass-blur {
  backdrop-filter: blur(10px);
  background: rgba(30, 45, 255, 0.4);
}
```

Check out the source @ [https://codepen.io/emdes/full/bGxzbrK](https://codepen.io/emdes/full/bGxzbrK) for preview and full code snippet.

#### NOTE:

1\. The \`blur()\` function receive number as argument in unit (px 'pixel' work best).

2\. The \`backdrop-filter\` property is not supported in all web browsers, so it's a good idea to provide a fallback for older browsers. You can do this by using a semi-transparent PNG image with the desired effect as a background for the element. This will not have the same level of detail as the backdrop-filter method, but it will provide a similar visual effect.

## CONCLUSION

Blur is a powerful visual effect in web design that can help make your elements stand out and create a sense of depth and motion