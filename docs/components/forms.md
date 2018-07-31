# Forms

Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

<hr>


#### Form controls

:::demo
```html
<div>
  <div class="row">
    <div class="col-md-6">
        <base-input placeholder="name@example.com"></base-input>
    </div>
    <div class="col-md-6">
      <base-input placeholder="Disabled" disabled></base-input>
    </div>
  </div>
   <div class="row">
      <div class="col-md-6">
          <base-input placeholder="Birthday" addon-left-icon="ni ni-zoom-split-in"></base-input>
      </div>
      <div class="col-md-6">
        <base-input placeholder="Birthday" addon-right-icon="ni ni-zoom-split-in"></base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
          <base-input placeholder="Success" :valid="true"></base-input>
      </div>
      <div class="col-md-6">
        <base-input placeholder="Error input" :valid="false"></base-input>
      </div>
    </div>
</div>
```
:::

#### Alternative

:::demo
```html
<div>
  <div class="row">
    <div class="col-md-6">
      <base-input alternative placeholder="name@example.com"></base-input>
    </div>
    <div class="col-md-6">
      <base-input alternative placeholder="Disabled" disabled></base-input>
    </div>
  </div>
   <div class="row">
      <div class="col-md-6">
          <base-input alternative placeholder="Birthday" addon-left-icon="ni ni-zoom-split-in"></base-input>
      </div>
      <div class="col-md-6">
        <base-input alternative placeholder="Birthday" addon-right-icon="ni ni-zoom-split-in"></base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
          <base-input alternative placeholder="Success" :valid="true"></base-input>
      </div>
      <div class="col-md-6">
        <base-input alternative placeholder="Error input" :valid="false"></base-input>
      </div>
    </div>
</div>
```
:::


#### Textarea

:::demo
```html
<form>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write a large text here ..."></textarea>
</form>
```
:::


#### Alternative

:::demo
```html
<form>
  <textarea class="form-control form-control-alternative" rows="3" placeholder="Write a large text here ..."></textarea>
</form>
```
:::


#### Checkboxes

:::demo
```html
<template>
<div>
   <base-checkbox class="mb-3" v-model="checkboxes.unchecked">
      Unchecked
  </base-checkbox>
  <base-checkbox class="mb-3" v-model="checkboxes.checked">
      Checked
  </base-checkbox>

  <base-checkbox class="mb-3" v-model="checkboxes.uncheckedDisabled" disabled>
      Unchecked
  </base-checkbox>
  <base-checkbox class="mb-3" v-model="checkboxes.checkedDisabled" disabled>
      Checked
  </base-checkbox>
</div>
</template>
<script>
export default {
    data(){
        return {
         checkboxes: {
            unchecked: false,
            checked: true,
            uncheckedDisabled: false,
            checkedDisabled: true
          }
       }
    }
}
</script>
```
:::

#### Radio buttons

:::demo
```html
<template>
<div>
    <base-radio name="radio0" class="mb-3" v-model="radio.radio1">
        Unchecked
    </base-radio>

    <base-radio name="radio1" class="mb-3" v-model="radio.radio1">
        Checked
    </base-radio>


    <base-radio name="radio2" class="mb-3" v-model="radio.radio2" disabled>
        Disabled unchecked
    </base-radio>

    <base-radio name="radio3" class="mb-3" v-model="radio.radio2" disabled>
        Disabled checked
    </base-radio>
</div>
</template>
<script>
export default {
    data(){
        return {
         radio: {
           radio1: "radio1",
           radio2: "radio3"
         }
       }
    }
}
</script>
```
:::

#### Toggle buttons

:::demo
```html
<template>
<div>
    <base-switch v-model="switches.off"></base-switch>
    <span class="clearfix"></span>
    <base-switch v-model="switches.on"></base-switch>
</div>
</template>
<script>
export default {
    data(){
        return {
         switches: {
             off: false,
             on: true
          },
       }
    }
}
</script>
```
:::

#### Sliders

:::demo
```html
<template>
<div>
     <base-slider v-model="sliders.slider1">
    </base-slider>
    <!-- Range slider -->
    <div class="mt-5">
        <!-- Range slider container -->
        <base-slider v-model="sliders.slider2" :range="{min: 0, max: 500}">

        </base-slider>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {
         sliders: {
           slider1: 0,
           slider2: [150, 400]
         }
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
         checkboxes: {
            unchecked: false,
            checked: true,
            uncheckedDisabled: false,
            checkedDisabled: true
          },
          radio: {
              radio1: "radio1",
              radio2: "radio3"
            },
            switches: {
              off: false,
              on: true
            },
            sliders: {
              slider1: 0,
              slider2: [150, 400]
            }
       }
    }
}
</script>


#### Base Input props

<props-table component-name="base-input"></props-table>

#### Base Checkbox props

<props-table component-name="base-checkbox"></props-table>

#### Base Radio props

<props-table component-name="base-radio"></props-table>


#### Slider plugin props

<props-table component-name="base-slider"></props-table>
