# Nerdraw

Nerdraw provides a means of creating two-dimensional drawings from a DSL (in
this case, YAML-based), similar to [Mermaid](https://mermaid.js.org/). Although
Mermaid allows one to created different kinds of diagrams, the form is generally
high-level and the means of customising the final result is limited.

The Nerdraw language is very close to `svg` but provides a way to specify object
bindings, freeing the author up to concentrate more on the general theme of the
drawing without having to constantly revisit specific coordinates and lengths.

For example:

```yaml
nd:
  title: Circle in Box
MyBox:
  t: r
  w: 300
  h: 50
  fill: blue
MyCircle:
  t: c
  cx: MyBox.centre.x
  cy: MyBox.centre.y
  r: MyBox.height/2
  fill: red
```

Results in the following SVG diagram:

<svg viewBox="0 0 300 50" xmlns="http://www.w3.org/2000/svg">
  <rect id="MyBox" width="300" height="50" fill="blue"/>
  <circle id="MyCircle" cx="150" cy="25" r="25" fill="red"/>
</svg>

Salient features of the Nerdraw language:

- It's an YAML which eliminates copious angle brackets;
- It's as terse as required; a `w` can be used instead of `width` provided that
  it's unambiguous within the context;
- Like SVG, if certain values aren't provided (e.g., `x`, `y` for the
  rectangle), appropriate defaults are assumed;
- Coordinates and distances can be expressed in terms of coordinates and
  dimensions of other objects—this is what is meant by "binding";
- There’s no need to explicitly specify a bounding box (although one can still
  choose to)—if none is provided, then it is calculated based on the natural
  bounding box formed by the content.
