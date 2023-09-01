<template>
<!-- 首页面主要展示区域 -->
    <div>
        <ImageShow :imgList="imgList"></ImageShow>
        <SortTab></SortTab>
        <GlobalName :modulesList="modulesList"></GlobalName>
    </div>
</template>

<script>
import ImageShow from './ImageShow.vue'
import SortTab from './SortTab.vue'
import GlobalName from './Global.vue'
export default {
    name:'HomePage',
    data(){
        return{
            // 轮播图
            imgList:[
                {bgc:'http://p4.music.126.net/Pc_N1ikYKnD7NES6QlWk1g==/109951168544792060.jpg',toPlace:"https://163.lu/Sd8Z2D",
                img:"http://p3.music.126.net/X3qNfiVkkPbiQ-Viz3zIhw==/109951168544789603.jpg"},
                {bgc:'http://p3.music.126.net/gNxDiExGYfRkTS9Fiuls5g==/109951168521592241.jpg',toPlace:"https://163.lu/GZrQKT",
                img:"http://p4.music.126.net/7CjmfeLij9JKPIlPwI_Odw==/109951168521583367.jpg"},
                {bgc:'http://p4.music.126.net/YiXW5ZK0bScf_ZGCNag4Bg==/109951168443089256.jpg',toPlace:"https://163.lu/TLbYk61",
                img:'http://p4.music.126.net/l9UiTLVPahHKboalK0NK5A==/109951168443095079.jpg'},
                {bgc:'http://p4.music.126.net/ZPM7F6M26IrZ2xuWMGCD1A==/109951168429519929.jpg',toPlace:"https://163.lu/J8Gye81",
                img:"http://p3.music.126.net/2xUf4K8AGT2OQsMOT5tjjA==/109951168429528626.jpg"},
                {bgc:'http://p4.music.126.net/-4GxyAcldiQggoY5Jo25nA==/109951168282516400.jpg',toPlace:"https://163.lu/FpKqy2",
                img:"http://p4.music.126.net/0n7ddLBFhbEuZzGxeXCzXw==/109951168282525607.jpg"},
                {bgc:'http://p4.music.126.net/D29ysLw-RrRoacgTDVxdFQ==/109951168299410831.jpg',toPlace:"https://163.lu/WkeNq2",
                img:"http://p3.music.126.net/cYNFhBagxazXB9BLHoaoHA==/109951168299418605.jpg"},
            ],
            // 耳机、银魂周边
            modulesList:[
                {href:'javascript:',img:'http://p4.music.126.net/kQqf40w-NFhLXIksQPgSwg==/109951164207184328.jpg',name:'earphone'},
                {href:'javascript:',img:'http://p4.music.126.net/QtFPuBnRPFatpnGsyNJYhw==/109951163973446450.jpg',name:'hotperipheral' }
        ]
        }
    },
    components: {
        ImageShow,
        SortTab,
        GlobalName,
    }
}
</script>

<style>

</style>