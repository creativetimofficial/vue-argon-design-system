# Buttons

Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

<hr>

#### Examples

Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.

:::demo
```html
<div>
 <base-button type="primary">Button</base-button>
 <base-button type="primary" icon="ni ni-bag-17">With icon</base-button>
 <base-button type="primary" icon="ni ni-atom"></base-button>
</div>
```
:::


:::demo
```html
<div>
 <base-button type="default">Default</base-button>
 <base-button type="primary">Primary</base-button>
 <base-button type="secondary">Secondary</base-button>
 <base-button type="info">Info</base-button>
 <base-button type="success">Success</base-button>
 <base-button type="danger">Danger</base-button>
 <base-button type="warning">Warning</base-button>
</div>
```
:::


#### Outline buttons

In need of a button, but not the hefty background colors they bring?
Add `outline` prop together with the button `type` remove all background images and colors on any button.


:::demo
```html
<div>
 <base-button outline type="default">Default</base-button>
 <base-button outline type="primary">Primary</base-button>
 <base-button outline type="secondary">Secondary</base-button>
 <base-button outline type="info">Info</base-button>
 <base-button outline type="success">Success</base-button>
 <base-button outline type="danger">Danger</base-button>
 <base-button outline type="warning">Warning</base-button>
</div>
```
:::

#### Sizes

Fancy larger or smaller buttons? Add `size="lg"` or "size="sm" for additional sizes.

:::demo
```html
<div>
 <base-button size="lg" type="primary">Primary</base-button>
 <base-button size="lg" type="secondary">Secondary</base-button>
</div>
```
:::

:::demo
```html
<div>
 <base-button size="sm" type="primary">Primary</base-button>
 <base-button size="sm" type="secondary">Secondary</base-button>
</div>
```
:::

<br>
Create block level buttons—those that span the full width of a parent—by adding `block` prop


:::demo
```html
<div>
 <base-button block type="primary">Primary</base-button>
 <base-button block type="secondary">Secondary</base-button>
</div>
```
:::


#### Active state

Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active.
There’s no need to add a class to `<button>`s as they use a pseudo-class.
However, you can still force the same active appearance with `.active`
(and include the aria-pressed="true" attribute) should you need to replicate the state programmatically.

:::demo
```html
<div>
  <base-button tag="a" type="primary" size="lg" href="#" class="active" role="button" aria-pressed="true">Primary link</base-button>
  <base-button tag="a" type="secondary" size="lg" href="#" class="active" role="button" aria-pressed="true">Link</base-button>
</div>
```
:::


#### Disabled state

Make buttons look inactive by adding the `disabled` boolean attribute to the component

:::demo
```html
<div>
  <base-button size="lg" type="primary" disabled>Primary button</base-button>
  <base-button size="lg" type="secondary" disabled>Button</base-button>
</div>
```
:::


#### Props

<props-table component-name="base-button"></props-table>
