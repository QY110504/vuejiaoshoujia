<template>
    <div>
        <div class="title">
            热销推荐
        </div>
        <ul>
            <li class="item boeder-bottom" v-for="_item of list" :key='_item.id'>
                <div class="item-img-wrapper">
                    <img class="item-img" :src="_item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title" v-text="_item.title"></p>
                    <p class="item-desc" v-text="_item.desc"></p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
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
        display :flex
        height :1.9rem
        overflow :hidden  
        .item-img-wrapper
            .item-img
                width :1.7rem
                height :1.7rem
                padding :0.1rem
        .item-info
            flex :1
            min-width :0
            padding :0.1rem
            .item-title
                line-height :0.54rem
                font-size :0.32rem
                ellipsis()
            .item-desc
                line-height :0.4rem
                color :#ccc
                ellipsis()
            .item-button
                margin-top :0.1rem
                color :#fff
                background :#ff9300
                padding: 0.1rem
                border-radius:0.06rem
</style>