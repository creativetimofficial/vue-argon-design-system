# Grid System

Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, five default responsive tiers, Sass variables and mixins, and dozens of predefined classes.

<hr>

#### How it works

Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content.
It’s built with [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) and is fully responsive. Below is an example and an in-depth look at how the grid comes together.

**New to or unfamiliar with flexbox?** [Read this CSS Tricks flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background)
for background, terminology, guidelines, and code snippets.


:::demo
```html
<div class="container ct-example-row">
  <div class="row">
    <div class="col-sm">
      <span>One of three columns</span>
    </div>
    <div class="col-sm">
      <span>One of three columns</span>
    </div>
    <div class="col-sm">
      <span>One of three columns</span>
    </div>
  </div>
</div>
```
:::

The above example creates three equal-width columns on small, medium, large,
and extra large devices using our predefined grid classes.
Those columns are centered in the page with the parent `.container`

#### Grid options

While Bootstrap uses `em`s or `rem`s for defining most sizes, `pxs` are used for grid breakpoints and container widths.
This is because the viewport width is in pixels and does not change with the font size.

See how aspects of the Bootstrap grid system work across multiple devices with a handy table.

<table class="table table-bordered table-striped">
    <thead>
    <tr>
      <th></th>
      <th class="text-center">
        Extra small
        <br>
        <small>&lt;576px</small>
      </th>
      <th class="text-center">
        Small
        <br>
        <small>≥576px</small>
      </th>
      <th class="text-center">
        Medium
        <br>
        <small>≥768px</small>
      </th>
      <th class="text-center">
        Large
        <br>
        <small>≥992px</small>
      </th>
      <th class="text-center">
        Extra large
        <br>
        <small>≥1200px</small>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <th class="text-nowrap" scope="row">Max container width</th>
      <td>None (auto)</td>
      <td>540px</td>
      <td>720px</td>
      <td>960px</td>
      <td>1140px</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Class prefix</th>
      <td>
        <code>.col-</code>
      </td>
      <td>
        <code>.col-sm-</code>
      </td>
      <td>
        <code>.col-md-</code>
      </td>
      <td>
        <code>.col-lg-</code>
      </td>
      <td>
        <code>.col-xl-</code>
      </td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row"># of columns</th>
      <td colspan="5">12</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Gutter width</th>
      <td colspan="5">30px (15px on each side of a column)</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Nestable</th>
      <td colspan="5">Yes</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Column ordering</th>
      <td colspan="5">Yes</td>
    </tr>
    </tbody>
</table>

#### Auto Layout columns

Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like `.col-sm-6`.

#### Equal Width

For example, here are two grid layouts that apply to every device and viewport, from `xs` to `xl`.
Add any number of unit-less classes for each breakpoint you need and every column will be the same width.

:::demo
```html
<div class="container ct-example-row">
  <div class="row">
    <div class="col">
      <span>1 of 2</span>
    </div>
    <div class="col">
      <span>2 of 2</span>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <span>1 of 3</span>
    </div>
    <div class="col">
      <span>2 of 3</span>
    </div>
    <div class="col">
      <span>3 of 3</span>
    </div>
  </div>
</div>
```
:::

<hr>

Equal-width columns can be broken into multiple lines, but there was a [Safari flexbox bug](https://github.com/philipwalton/flexbugs#flexbug-11)
that prevented this from working without an explicit `flex-basis` or `border`.
There are workarounds for older browser versions, but they shouldn’t be necessary if you’re up-to-date.

:::demo
```html
<div class="container ct-example-row">
  <div class="row">
    <div class="col"><span>Column</span></div>
    <div class="col"><span>Column</span></div>
    <div class="w-100"></div>
    <div class="col"><span>Column</span></div>
    <div class="col"><span>Column</span></div>
  </div>
</div>
```
:::


#### Setting one column width

Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.

:::demo
```html
<div class="container ct-example-row">
  <div class="row">
    <div class="col">
      <span>1 of 3</span>
    </div>
    <div class="col-6">
      <span>2 of 3 (wider)</span>
    </div>
    <div class="col">
      <span>3 of 3</span>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <span>1 of 3</span>
    </div>
    <div class="col-5">
      <span>2 of 3 (wider)</span>
    </div>
    <div class="col">
      <span>3 of 3</span>
    </div>
  </div>
</div>
```
:::

#### Variable width content

Use `col-{breakpoint}-auto` classes to size columns based on the natural width of their content.

:::demo
```html
<div class="container ct-example-row">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      <span>1 of 3</span>
    </div>
    <div class="col-md-auto">
      <span>Variable width content</span>
    </div>
    <div class="col col-lg-2">
      <span>3 of 3</span>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <span>1 of 3</span>
    </div>
    <div class="col-md-auto">
      <span>Variable width content</span>
    </div>
    <div class="col col-lg-2">
      <span>3 of 3</span>
    </div>
  </div>
</div>
```
:::

#### Equal-width multi-row

Create equal-width columns that span multiple rows by inserting a `.w-100` where you want the columns to break to a new line.
Make the breaks responsive by mixing the `.w-100` with some responsive display utilities.

:::demo
```html
<div class="row ct-example-row">
  <div class="col"><span>col</span></div>
  <div class="col"><span>col</span></div>
  <div class="w-100"></div>
  <div class="col"><span>col</span></div>
  <div class="col"><span>col</span></div>
</div>
```
:::

#### Responsive classes

Bootstrap’s grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.

#### All breakpoints

For grids that are the same from the smallest of devices to the largest, use the `.col` and `.col-*` classes.
Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to `.col`.

:::demo
```html
<div class="ct-example-row">
    <div class="row">
      <div class="col"><span>col</span></div>
      <div class="col"><span>col</span></div>
      <div class="col"><span>col</span></div>
      <div class="col"><span>col</span></div>
    </div>
    <div class="row">
      <div class="col-8"><span>col-8</span></div>
      <div class="col-4"><span>col-4</span></div>
    </div>
</div>
```
:::

#### Stacked to horizontal

Using a single set of `.col-sm-*` classes, you can create a basic grid system that starts out stacked and becomes
horizontal at the small breakpoint (`sm`).

:::demo
```html
<div class="ct-example-row">
    <div class="row">
      <div class="col-sm-8"><span>col-sm-8</span></div>
      <div class="col-sm-4"><span>col-sm-4</span></div>
    </div>
    <div class="row">
      <div class="col-sm"><span>col-sm</span></div>
      <div class="col-sm"><span>col-sm</span></div>
      <div class="col-sm"><span>col-sm</span></div>
    </div>
</div>
```
:::


#### Mix and match

Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.


:::demo
```html
<div class="ct-example-row">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <div class="row">
      <div class="col-12 col-md-8"><span>.col-12 .col-md-8</span></div>
      <div class="col-6 col-md-4"><span>.col-6 .col-md-4</span></div>
    </div>

    <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
    <div class="row">
      <div class="col-6 col-md-4"><span>.col-6 .col-md-4</span></div>
      <div class="col-6 col-md-4"><span>.col-6 .col-md-4</span></div>
      <div class="col-6 col-md-4"><span>.col-6 .col-md-4</span></div>
    </div>

    <!-- Columns are always 50% wide, on mobile and desktop -->
    <div class="row">
      <div class="col-6"><span>.col-6</span></div>
      <div class="col-6"><span>.col-6</span></div>
    </div>
</div>
```
:::
