<template>
    <div>
        <div class="title">
            周末去哪里
        </div>
        <ul>
            <li class="item boeder-bottom" v-for="_item of list" :key='_item.id'>
                <div class="item-img-wrapper">
                    <img class="item-img" :src="_item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title" v-text="_item.title"></p>
                    <p class="item-desc" v-text="_item.desc"></p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
      list: Array
  },
  data(){
      return {
      }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';
    .title
        line-height :0.8rem
        background :#eee
        margin-top :0.2rem
        text-indent :0.2rem
    .item
        .item-img-wrapper
            height:0
            overflow :hidden
            padding-bottom: 33.9%
            .item-img
                width :100%
        .item-info
            padding :0.1rem
            .item-title
                line-height :0.54rem
                font-size :0.32rem
                ellipsis()
            .item-desc
                line-height :0.4rem
                color :#ccc
                ellipsis()
</style>