<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            {{this.city}}
            <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
    </div>
</template>
<script>
export default {
  name: "HomeHeader",
  props: {
      city:String

  }
}
</script>
<style lang="stylus" scoped>
    /*1rem = html font-size = 50px*/
    @import '~styles/varibles.styl'
    .header
        display :flex
        background : $bgColor
        height: 0.86rem
        line-height :0.86rem
        color :#fff
        .header-left
            width :.64rem
            float :left
            .back-icon
                text-align :center
                font-size :0.4rem
        .header-input
            flex:1
            background: #ffffff
            margin-top :0.12rem
            height 0.64rem
            line-height 0.64rem
            margin-left :0.2rem
            border-radius:.1rem
            color :#ccc
            padding-left :0.15rem
        .header-right
            width :1.24rem
            float :right
            text-align :center
            .arrow-icon
                font-size :0.24rem
                margin-left :0.02rem
</style>