<template>
  <div class="border-box">
    <div class="box-header">
      <slot name="boxTitle"></slot>
    </div>
    <div class="box-main" :class="{'bg-border': !noBorder}">
      <slot name="boxMain"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    noBorder: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.border-box{
  display: flex;
  flex-direction: column;
  .box-header{
    padding-left: 36px;
    width: 100%;
    height: 42px;
    line-height: 42px;
    color: #c8dbf4;
    font-size: 20px;
    background: url("../assets/img/title.png") no-repeat;
    background-size: 100% 100%;
    background-position: center;
    box-sizing: border-box;
  }
  .box-main{
    flex: 1;
    width: 100%;
  }
  .bg-border{
  }
}
</style>
