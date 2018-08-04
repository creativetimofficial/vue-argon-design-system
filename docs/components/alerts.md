# Alerts

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

<hr>

#### Examples

:::demo
```html
<div>
    <base-alert type="default">
        <strong>Default!</strong> This is a default alert—check it out!
    </base-alert>

    <base-alert type="primary">
        <strong>Primary!</strong> This is a primary alert—check it out!
    </base-alert>

    <base-alert type="secondary">
        <strong>Secondary!</strong> This is a secondary alert—check it out!
    </base-alert>

    <base-alert type="info">
        <strong>Info!</strong> This is a info alert—check it out!
    </base-alert>

    <base-alert type="success">
        <strong>Success!</strong> This is a success alert—check it out!
    </base-alert>

    <base-alert type="danger">
        <strong>Danger!</strong> This is a danger alert—check it out!
    </div>

    <base-alert type="warning">
        <strong>Warning!</strong> This is a warning alert—check it out!
    </base-alert>
</div>
```
:::


#### With icon

:::demo
```html
<base-alert type="warning">
    <span class="alert-inner--icon"><i class="ni ni-like-2"></i></span>
    <span class="alert-inner--text"><strong>Warning!</strong> This is a warning alert—check it out that has an icon too!</span>
</base-alert>
```
:::

#### Dismissing

:::demo
```html
<div>
  <base-alert type="default" dismissible>
      <span class="alert-inner--icon"><i class="ni ni-like-2"></i></span>
      <span class="alert-inner--text"><strong>Default!</strong> This is a default alert—check it out!</span>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
      </button>
  </base-alert>

  <base-alert type="primary" dismissible>
      <span class="alert-inner--icon"><i class="ni ni-like-2"></i></span>
      <span class="alert-inner--text"><strong>Primary!</strong> This is a primary alert—check it out!</span>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
      </button>
  </base-alert>

  <base-alert type="secondary" dismissible>
      <span class="alert-inner--icon"><i class="ni ni-like-2"></i></span>
      <span class="alert-inner--text"><strong>Secondary!</strong> This is a secondary alert—check it out!</span>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
      </button>
  </base-alert>

  <base-alert type="info" dismissible>
      <span class="alert-inner--icon"><i class="ni ni-like-2"></i></span>
      <span class="alert-inner--text"><strong>Info!</strong> This is a info alert—check it out!</span>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
      </button>
  </base-alert>

  <base-alert type="success" dismissible>
      <span class="alert-inner--icon"><i class="ni ni-like-2"></i></span>
      <span class="alert-inner--text"><strong>Success!</strong> This is a success alert—check it out!</span>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
      </button>
  </base-alert>

  <base-alert type="danger" dismissible>
      <span class="alert-inner--icon"><i class="ni ni-like-2"></i></span>
      <span class="alert-inner--text"><strong>Danger!</strong> This is a danger alert—check it out!</span>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
      </button>
  </base-alert>

  <base-alert type="warning" dismissible>
      <span class="alert-inner--icon"><i class="ni ni-like-2"></i></span>
      <span class="alert-inner--text"><strong>Warning!</strong> This is a warning alert—check it out!</span>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
      </button>
  </base-alert>
</div>
```
:::

#### Props

<props-table component-name="base-alert"></props-table>
