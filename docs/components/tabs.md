# Tabs

Use Bootstrap’s JavaScript tabs to divide your content visually.

<hr>


#### Nav pills
:::demo
```html
<tabs>
  <tab-pane title="UI/UX Design"></tab-pane>
  <tab-pane title="Programming"></tab-pane>
  <tab-pane title="Graphic"></tab-pane>
</tabs>
```
:::

#### Circle nav pills
:::demo
```html
<div>
  <tabs :fill="false" circle>
      <tab-pane>
          <span slot="title" class="nav-link-icon d-block"><i class="ni ni-atom"></i></span>
      </tab-pane>
      <tab-pane>
          <span slot="title" class="nav-link-icon d-block"><i class="ni ni-chat-round"></i></span>
      </tab-pane>
      <tab-pane>
          <span slot="title" class="nav-link-icon d-block"><i
                  class="ni ni-cloud-download-95"></i></span>
      </tab-pane>
  </tabs>
</div>
```
:::

#### Tabs
:::demo
```html
<tabs fill class="flex-column flex-md-row">
    <card shadow>
        <tab-pane>
            <span slot="title">
                <i class="ni ni-cloud-upload-96">
                Home
            </span>
            <p class="description">Raw denim you probably haven't heard of them jean shorts
                Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                keffiyeh dreamcatcher synth.</p>
        </tab-pane>

        <tab-pane title="Profile">
            <span slot="title">
                <i class="ni ni-bell-55 mr-2">
                Profile
            </span>
            <p class="description">Cosby sweater eu banh mi, qui irure terry richardson ex
                squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                american apparel, butcher voluptate nisi qui.</p>
        </tab-pane>

        <tab-pane>
             <span slot="title">
                <i class="ni ni-calendar-grid-58">
                Messages
              </span>
            <p class="description">Raw denim you probably haven't heard of them jean shorts
                Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                keffiyeh dreamcatcher synth.</p>
        </tab-pane>
    </card>
</tabs>
```
:::


#### Tabs props

<props-table component-name="tabs"></props-table>

#### Tab Pane props

<props-table component-name="tab-pane"></props-table>
