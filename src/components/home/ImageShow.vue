<template>
    <!--首页轮播图 -->
    <div>
        <div class="imagebody" @mouseenter="clearAutoPlay" @mouseleave="autoPlay">
            <div class="imageshow">
                <li  v-for="(item, index) in imgList" v-show="n == index" :key="index" v-bind:style="{backgroundImage:'url('+item.bgc+')',opacity:1}">
                    <a :href="item.toPlace">
                        <img :src="item.img" alt="banners">
                    </a>
                </li>    
            </div>
            <div class="down-points">
                <a v-for="(m,index) in imgList" :key="index" @click="n=index"
                :style=" n == index ? {backgroundImage:'url('+img+')',width: '8px',height: '8px',top:'1.2px'} : ''"></a>
            </div>
            <div class="choose">
                <a class="left" @click="turnLeft"><i class="left-ico"></i></a>
                <a class="right" @click="turnRight"><i class="right-ico"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'ImageShow',
    props:['imgList'],
    data(){
        return {
            n:0,
            img:require('../../assets/dot_hover.png'),
            interId:null
        }
    },
    methods:{
        autoPlay(){
            this.clearAutoPlay(this.interId)
            this.interId = setInterval(() => {
                // console.log(this.n);
                this.n++;
                if(this.n == this.imgList.length){
                    this.n = 0
                }
                // debugger
            },2000)
        },
        turnLeft(){
            this.n--;
            if(this.n<0){
                this.n = this.imgList.length-1
            }
        },
        turnRight(){
            this.n++;
            if(this.n==this.imgList.length){
                this.n = 0
            }
        },
        clearAutoPlay(){
            clearInterval(this.interId)
        }
    },
    mounted(){
        this.autoPlay()
    }
}   
</script>

<style>
.imagebody{
    width: 100%;
    height: 480px;
    overflow: hidden;
    position: relative;
}
.imageshow{
    height: 480px;
    width: 100%;
    display: block;
    position: relative;
    padding: 0;
    margin: 0;
}
.imageshow li{
    top: 0;
    left: 0;
    width: 100%;
    height: 480px;
    list-style: none;
    position:absolute;
    background-repeat: repeat-x;
    background-size: cover;
}
.imageshow li a{
    top: 50%;
    left: 50%;
    width: 1100px;
    height: 480px;
    position: absolute;
    margin-top: -240px;
    margin-left: -550px;
}
.imageshow li a img{
    width: 100%;
    height: 100%;
}
.down-points{
    position: relative;
    width: 100%;
    z-index: 99;
    margin-top: -20px;
    /* background: #c1a8a8; */
    bottom: 30px;
    text-align: center;
}
.down-points a{
    display: inline-block;
    width: 6px;
    height: 6px;
    margin: 0 4px;
    position: relative;
    background-image: url(../../assets/dot.png);
}
.choose{
    position: relative;
    z-index: 9;
    top: -294px;
    display: block;
}
.choose a{
    position: absolute;
    z-index: 1;
    width: 37px;
    height: 63px;
    top: 0;
    background-color: #000;
    opacity: 0.1;
}
.left{
    left: 12px;
}
.right{
    right: 12px;
}
.choose a i{
    position: absolute;
    z-index: 2;
    display: block;
    width: 100%;
    height: 100%;
    font-style: normal;
    text-align: left;
    font-size: inherit;
    background-image: url(../../assets/pointlist.png);
}
.left-ico{
    background-position: 0px -0px;
}
.right-ico{
    background-position: -48px -0px;
}
</style>