This is a test of react, based on the technical task set in the interview.
I've been learning more react, and i'm about half way through a course on udemy
I decided to see if i could build it in react 

https://www.figma.com/file/OLjuRAuzR4GRILARzgLmed/Tech-Task?node-id=0%3A1

### This is a test build of a new set of css principles.
#### This branch focuses on keeping CSS separate from Javascript, the other branch will use components
I've leveraged **every layout** organisation ideas combined with my own styling. The idea is to create powerful CSS that is scalable and fast to write, I've done a few experiments with CSS applications in JavaScript Frameworks. And i think keeping CSS and JavaScript seperate is the best idea. Some of the component stuff does look powerful, but I'm unsure about it's effect on writing clean semantic markup.
A interesting part of this project is gorko, which is used to rapidly create utility classes based on CSS variables.

**Pages are built upon the idea of grid rows, with the following structure.**
````html
<article class="grid-row"> 
    <section class="grid"><!-- automatic column number -->
        <div><!-- --></div> 
        <div><!-- --></div>  
        <div><!-- --></div>  
    </section>
</article>
```` 
Any HTML elements can be used with the same class set up
````html
<header class="grid-row"> 
    <nav class="grid">
        <div><!-- --></div> 
        <div><!-- --></div>  
        <div><!-- --></div>  
    </nav>
</header>
```` 
Successive rows can be used to create whole pages
```html
<article class="grid-row">
    <section id="title" class="grid"> <!-- One Column -->
        <div><!-- --></div> 
    </section>
    <section id="text" class="grid"> <!-- Two Columns -->
        <figure><!-- --></figure> 
        <div><!-- --></div>  
    </section>
    <section id="gallery" class="grid"> <!-- Four Columns -->
        <figure><!-- --></figure> 
        <figure><!-- --></figure> 
        <figure><!-- --></figure> 
        <figure><!-- --></figure> 
    </section>
</article>
```
`.grid-row` is a wrapper for as many `.grid` elements as you want. Each `.grid` element can be set to a different widths: `standard`, `alignwide`, `alignfull` & `narrow`.

In this image you can see the different widths: the top row is `.align-full`, the second row is `.align-wide` and the bottom row is aligned to the `.standard` witdth 

![image of grid colmns](./src/assets/images/twelve-column.png "shows the three ")

This approach allows flexibility when building up pages with combinations of coloured backgrounds and different margins.
```scss
  .grid-row {
    align-items: stretch;
    display: grid;
    grid-auto-flow: dense;
    grid-auto-rows: minmax(min-content, max-content);
    grid-template-columns: [full-start] minmax(calc(calc(100% - 1500px) / 2), 1fr) [main-start] repeat(12, [col-start] 1fr) [main-end] minmax(calc(calc(100% - 1500px) / 2), 1fr) [full-end];
    grid-template-rows: auto;
    margin: 0 auto var(--gridsize) auto;
    max-width: calc(var(--measure) * 5);
    position: relative;
  }
```
This CSS grid applied to `.grid-row` is a 14 column grid, 12 have a fixed width, and the two outermost spread to as large a possible. This is used control the `.grid` width options:
```scss
.narrow { 
  grid-column-start: 4;
  grid-column-end: 12;
}
.standard { // Declared as the default, no need to declare the class
  grid-column-start: 3;
  grid-column-end: 13;
}
.align-wide {
  grid-column-start: 2;
  grid-column-end: 14;
}
.align-full {
  grid-column-start: 1;
  grid-column-end: 15;
}
```
By default they are set to the `standard` width, which doesn't need to be declared  
```html
<article class="grid-row">
    <section class="grid">
        <div><!-- --></div> 
        <div><!-- --></div>  
        <div><!-- --></div>
    </section>
    <section class="grid align-wide">
        <div><!-- --></div> 
        <div><!-- --></div>  
        <div><!-- --></div>
    </section>
    <section class="grid align-full">
        <div><!-- --></div> 
        <div><!-- --></div>  
        <div><!-- --></div>
    </section>
</article>
```
`.grid-row`'s can be separated out to allow for further separation when wanting to apply different background colours or images that should span full width
```html
<article>
    <section class="grid-row bg-primary">
        <div class="grid align-wide">
            <div><!-- --></div> 
            <div><!-- --></div>  
        </div>
    </section>
    <section class="grid-row">
        <div class="grid">
            <div><!-- --></div> 
            <div><!-- --></div>  
        </div>
    </section>
    <section class="grid-row bg-primary">
        <div class="grid align-wide">
            <div><!-- --></div> 
            <div><!-- --></div>  
        </div>
    </section>
</article>
```
The `.grid` inside of the `.grid-row` automatically sets the column number to match the number of child elements with a minimum width of 250px
````scss    
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
````
Whereas the `.grid-layout` class, which can be used in the place of `.grid` will allow you to set fixed column structures, such as:
```html
<article class="grid-row">
    <section class="grid-layout"> <!-- By default it will set up one column -->
        <div><!-- --></div> 
    </section>
</article>
```
These classes can be used to enforce column structures like below
```scss
.has-one-column / .has-two-columns / .has-three-columns / .has-four-columns / ...
```
```html
<article class="grid-row">
    <section class="grid-layout has-two-columns"> 
        <div><!-- --></div> 
        <div><!-- --></div> 
    </section>
</article>
```
Some of these layouts have modifier classes to adjust the ratios of the column structure
```html
<article class="grid-row">
    <section class="grid-layout has-two-columns"> 
        <div><!-- --></div> 
        <div><!-- --></div> 
    </section>
    <section class="grid-layout has-two-columns left-wide"> 
        <div><!-- --></div> 
        <div><!-- --></div> 
    </section>
    <section class="grid-layout has-two-columns right-wide"> 
        <div><!-- --></div> 
        <div><!-- --></div> 
    </section>
</article>
```
It will enforce the column layout regardless of the number of child elements.
```html
<article class="grid-row">
    <section class="grid-layout has-three-columns">  <!-- Still three columns -->
        <div><!-- --></div> 
        <div><!-- --></div> 
        <div><!-- --></div> 
        <div><!-- --></div> 
        <div><!-- --></div> 
        <div><!-- --></div> 
    </section>
</article>
```

Global CSS variables are used to set/store all the values for `margins`, `max-width`,`grid-gap` & `padding` etc.... 

These values can be set globally & adjusted for local elements. 
```scss
$gorko-base-size: 1.2rem !default;
:root {
  --primary: #223c6d;
  --primary-shade: #566d98;
  --secondary: #0E3B93;
  --secondary-shade: #2374ab;
  --tertiary: #F18366;
  --quaternary: #A44C35;
  --dark: #1a1a1a;
  --grey: #c4c4c4;
  --light: #f3f3f3;

  --size-300: #{$gorko-base-size * 0.8};
  --size-400: #{$gorko-base-size};
  --size-500: #{$gorko-base-size * 1.25};
  --size-600: #{$gorko-base-size * 1.6};
  --size-700: #{$gorko-base-size * 2};
  --size-800: #{$gorko-base-size * 2.5};
  --size-900: #{$gorko-base-size * 3};

  --measure: 60ch; 
  --grid-gap: var(--size-500);
  --flow-space: var(--size-800);
}
```
Multiplications of these base values are used to set  widths proportionally all over the site
```scss
.grid-row {
    margin: 0 auto var(--gridsize) auto;
    max-width: calc(var(--measure) * 5);
}
```
Utility classes dynamically generated by Goko from these values, can be used to adjust elements
```scss
.grid-gap-000 / .grid-gap-300 / .grid-gap-400 / .grid-gap-500 / .grid-gap-600 
```
```scss
.pad-000 / .pad-300 / .pad-400 / .pad-500 / .pad-600 
```
```scss
.bg-primary / .bg-primary-shade / .bg-secondary / .bg-secondary-shade / .bg-tertiary 
```
This set up below makes a full width row with three columns & no gap between the elements
```html
<article class="grid-row">
    <section class="grid align-full grid-gap-000">
        <figure><!-- --></figure> 
        <figure><!-- --></figure> 
        <figure><!-- --></figure>
    </section>
</article>
```
A wide row with padding all around
```html
<article class="grid-row">
    <section class="grid align-wide pad-500">
        <div><!-- --></div>
    </section>
</article>
```

