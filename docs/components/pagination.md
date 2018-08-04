# Pagination

Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.

<hr>

#### Examples

:::demo
```html
<div>
  <base-pagination :page-count="10" v-model="pagination.default"></base-pagination>
</div>
<script>
export default {
  data() {
    return {
      pagination: {
        default: 1
      }
    };
  }
};
</script>
```
:::

#### Sizing

Fancy larger or smaller pagination? Add `size="lg"` or `size="sm"` for additional sizes

:::demo
```html
<base-pagination :page-count="10" size="lg"></base-pagination>
```
:::

:::demo
```html
<div>
  <base-pagination :page-count="10" size="sm"></base-pagination>
</div>
```
:::

#### Alignment

Change alignment with the help of `align` prop. It uses `flexbox` under the hood.
:::demo
```html
<div>
  <base-pagination :page-count="10" align="center"></base-pagination>
</div>
```
:::

<script>
export default {
  data() {
    return {
      pagination: {
        default: 1,
        danger: 3
      }
    };
  }
};
</script>

#### Props

<props-table component-name="base-pagination"></props-table>
