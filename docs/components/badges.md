# Badge

Documentation and examples for badges, our small count and labeling component.

<hr>

#### Example

Badges can be used as part of links or buttons to provide a counter.

:::demo
```html
<base-button type="primary">
  <span>Notifications</span>
  <badge type="white">4</badge>
</base-button>
```
:::

#### Contextual variations

Add any of the below mentioned modifier classes to change the appearance of a badge.

:::demo
```html
<div>
    <badge type="default">Default</badge>

    <badge type="primary">Primary</badge>

    <badge type="secondary">Secondary</badge>

    <badge type="info">Info</badge>

    <badge type="success">Success</badge>

    <badge type="danger">Danger</badge>

    <badge type="warning">Warning</badge>
</div>
```
:::


#### Pill badges

Use the `pill` prop to make badges more rounded (with a larger border-radius and additional horizontal padding).
Useful if you miss the badges from v3.

:::demo
```html
<div>
    <badge pill type="default">Default</badge>

    <badge pill type="primary">Primary</badge>

    <badge pill type="secondary">Secondary</badge>

    <badge pill type="info">Info</badge>

    <badge pill type="success">Success</badge>

    <badge pill type="danger">Danger</badge>

    <badge pill type="warning">Warning</badge>
</div>
```
:::


#### Links

Using the contextual badge component
together with the `tag` prop in order to switch to your desired html element.
Providing `tag="a"` will transform the badge into an `anchor` with hover and focus states.

:::demo
```html
<div>
    <badge tag="a" href="#" type="default">Default</badge>

    <badge tag="a" href="#" type="primary">Primary</badge>

    <badge tag="a" href="#" type="secondary">Secondary</badge>

    <badge tag="a" href="#" type="info">Info</badge>

    <badge tag="a" href="#" type="success">Success</badge>

    <badge tag="a" href="#" type="danger">Danger</badge>

    <badge tag="a" href="#" type="warning">Warning</badge>
</div>
```
:::


#### Props

<props-table component-name="badge"></props-table>
