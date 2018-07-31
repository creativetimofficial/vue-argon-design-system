<template>
  <div
    class="demo-block"
    :class="[blockClass, { 'hover': hovering }]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false">
    <slot name="source"></slot>
    <div class="meta" ref="meta">
      <div class="description" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="source-code">
        <button class="btn-clipboard" @click="doCopy">Copy</button>
        <div class="raw-code">
          <slot name="highlight" ref="test"></slot>
        </div>
      </div>
    </div>
    <div
      class="demo-block-control"
      ref="control"
      @click="isExpanded = !isExpanded">
      <transition name="arrow-slide">
        <i :class="[iconClass, { 'hovering': hovering }]"></i>
      </transition>
      <transition name="text-slide">
        <span class="showText" v-show="hovering">{{ controlText }}</span>
      </transition>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        hovering: false,
        isExpanded: false,
        fixedControl: false,
        scrollParent: null
      };
    },

    props: {
      source: {
        type: String
      }
    },

    methods: {

      scrollHandler() {
        // const { top, bottom, left } = this.$refs.meta.getBoundingClientRect();
        // this.fixedControl = bottom > document.documentElement.clientHeight &&
        //   top + 44 <= document.documentElement.clientHeight;
        // this.$refs.control.style.left = this.fixedControl ? `${ left }px` : '0';
      },

      removeScrollHandler() {
        this.scrollParent && this.scrollParent.removeEventListener('scroll', this.scrollHandler);
      },
      doCopy () {
        let html = this.$el.querySelector('.raw-code').innerHTML;
        this.$copyText(html).then((e) => {
          alert('Copied')
          console.log(e)
        }, (e) => {
          alert('Can not copy')
          console.log(e)
        })
      }
    },

    computed: {
      lang() {
        return this.$route.path.split('/')[1];
      },

      blockClass() {
        return `demo-${ this.lang } demo-${ this.$router.currentRoute.path.split('/').pop() }`;
      },

      iconClass() {
        return this.isExpanded ? 'el-icon-caret-top' : 'el-icon-caret-bottom';
      },

      controlText() {
        return this.isExpanded ? 'Hide' : 'Show';
      },

      codeArea() {
        return this.$el.getElementsByClassName('meta')[0];
      },

      codeAreaHeight() {
        if (this.$el.getElementsByClassName('description').length > 0) {
          return this.$el.getElementsByClassName('description')[0].clientHeight +
            this.$el.getElementsByClassName('highlight')[0].clientHeight + 20;
        }
        return this.$el.getElementsByClassName('highlight')[0].clientHeight;
      }
    },

    watch: {
      isExpanded(val) {
        this.codeArea.style.height = val ? `${ this.codeAreaHeight + 1 }px` : '0';
        if (!val) {
          this.fixedControl = false;
          this.$refs.control.style.left = '0';
          this.removeScrollHandler();
          return;
        }
        setTimeout(() => {
          this.scrollParent = document.querySelector('.page-component__scroll > .el-scrollbar__wrap');
          this.scrollParent && this.scrollParent.addEventListener('scroll', this.scrollHandler);
          this.scrollHandler();
        }, 200);
      }
    },

    mounted() {
      this.$nextTick(() => {
        let highlight = this.$el.getElementsByClassName('highlight')[0];
        if (this.$el.getElementsByClassName('description').length === 0) {
          highlight.style.width = '100%';
          highlight.borderRight = 'none';
        }
      });
    },

    beforeDestroy() {
      this.removeScrollHandler();
    }
  };
</script>
<style lang="scss">
  .demo-block {
    border: solid 1px #ebebeb;
    border-radius: 3px;
    transition: .2s;

    &.hover {
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
    }

    code {
      font-family: Menlo, Monaco, Consolas, Courier, monospace;
    }

    .demo-button {
      float: right;
    }

    .source {
      padding: 24px;
    }

    .source-code {
      position: relative;
    }
    .meta {
      background-color: #fafafa;
      border-top: solid 1px #eaeefb;
      height: 0;
      transition: height .2s;
      overflow: scroll;
    }


    .highlight {
      pre {
        margin: 0;
      }

      code.hljs {
        margin: 0;
        border: none;
        max-height: none;
        border-radius: 0;

        &::before {
          content: none;
        }
      }
    }

    .demo-block-control {
      border-top: solid 1px #eaeefb;
      height: 44px;
      box-sizing: border-box;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
      margin-top: -1px;
      color: #d3dce6;
      cursor: pointer;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      &.is-fixed {
        position: fixed;
        bottom: 0;
        width: 868px;
      }

      i {
        font-size: 16px;
        line-height: 44px;
        transition: .3s;
        &.hovering {
          transform: translateX(-40px);
        }
      }

      > span {
        position: absolute;
        transform: translateX(-30px);
        font-size: 14px;
        line-height: 44px;
        transition: .3s;
        display: inline-block;
      }

      &:hover {
        color: #409EFF;
        background-color: #f9fafc;
      }

      & .text-slide-enter,
      & .text-slide-leave-active {
        opacity: 0;
        transform: translateX(10px);
      }

      .control-button {
        line-height: 26px;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 14px;
        padding-left: 5px;
        padding-right: 25px;
      }
    }
  }
</style>
