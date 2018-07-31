# Navbar

Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.

<hr>

#### Example

:::demo
```html
<div style="position: relative">
<base-nav type="default" effect="dark" expand>
    <a class="navbar-brand" href="#">Default Color</a>

    <div class="row" slot="content-header" slot-scope="{closeMenu}">
        <div class="col-6 collapse-brand">
            <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
                <img src="https://demos.creative-tim.com/vue-argon-design-system/img/brand/blue.png">
            </a>
        </div>
        <div class="col-6 collapse-close">
            <close-button @click="closeMenu"></close-button>
        </div>
    </div>

    <ul class="navbar-nav ml-lg-auto">
        <li class="nav-item">
            <a class="nav-link nav-link-icon" href="#">
                Discover
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link nav-link-icon" href="#">
                Profile
            </a>
        </li>
        <base-dropdown tag="li" title="Settings">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Separated link</a>
        </base-dropdown>
    </ul>
 </base-nav>
</div>
```
:::

#### Variations

:::demo
```html
<template>
<div style="position: relative">
<base-nav :type="type" effect="dark" expand class="mt-4" v-for="type in types" :key="type">
    <a class="navbar-brand" href="#">Default Color</a>

    <div class="row" slot="content-header" slot-scope="{closeMenu}">
        <div class="col-6 collapse-brand">
            <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
                <img src="https://demos.creative-tim.com/vue-argon-design-system/img/brand/blue.png">
            </a>
        </div>
        <div class="col-6 collapse-close">
            <close-button @click="closeMenu"></close-button>
        </div>
    </div>

    <ul class="navbar-nav ml-lg-auto">
        <li class="nav-item">
            <a class="nav-link nav-link-icon" href="#">
                Discover
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link nav-link-icon" href="#">
                Profile
            </a>
        </li>
        <base-dropdown tag="li" title="Settings">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Separated link</a>
        </base-dropdown>
    </ul>
 </base-nav>
</div>
</template>
<script>
  export default {
    data(){
        return {
            types: ['primary', 'success', 'danger', 'warning', 'info']
        }
     }
  }
</script>
```
:::


<script>
  export default {
    data(){
        return {
            types: ['primary', 'success', 'danger', 'warning', 'info']
        }
     }
  }
</script>

#### Base Nav props

<props-table component-name="base-nav"></props-table>

#### Close button props

<props-table component-name="close-button"></props-table>
