<template>
    <!-- 相关分类页面的商品展示模块 -->
    <div class="IPpre-modules">
        <div class="m-product">
            <div>
                <ul class="sortby">
                    <li v-for="(item,index) in sort" :key="index" :class="index == current ? 'active' :''">
                        <a href="javascript:"><i :class="index !=0 ? 'point' : ''"></i><em @click="event(index)">{{ item.title }}</em></a>
                    </li>
                </ul>
            </div>
            <ul class="recmdlist" v-if="goods_sort.length > 0">
                <li class="recmditem" v-for="(item, index) in goods_sort" :key="item.data_id"
                    :style="(index + 1) % 4 == 0 ? { marginRight: '0px' } : ''">
                    <router-link :to="{ 
                        name: 'detail',
                        params:{
                            title:item.contend,
                            id:item.data_id,
                            bread:bread
                        }
                        }">
                        <div>
                            <a class="imgbox" :href="item.href"><img class="productimg" :src="item.img" alt="" /></a>
                            <div class="content">
                                <h3>
                                    <span v-show="item.discount" class="tag"><em>{{ item.discount }}</em></span>&nbsp;
                                    <a :href="item.href">{{ item.contend }}</a>
                                </h3>
                                <p class="f-thide">
                                    ￥<em>{{ item.money }}</em>
                                </p>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
            <div v-else>
                <h3>你要找商品还没有上架哟~</h3>
            </div>
        </div>
        <div>
            <div>
                <div>
                    <a href="javascript:"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "ModulesName",
    props:['bread'],
    data() {
        return {
            sortType:0,
            current:0,
            // goods: this.productionData.IPper.goods,
            keyWord:'',
            keyPri:{
                bottom:'',
                top:''
            },
            goods:'',
            sort:[
                {id:0,title:'综合'},
                {id:1,title:'价格由低到高'},
                {id:2,title:'价格由高到低'},
            ],
            identify:''
        };
    },
    created(){
        this.$bus.$on('getKeyBra', this.getKeyWord)
        this.$bus.$on('getKeyBra',(data) =>{
            console.log(data);
        })
        this.$bus.$on('getKeyPri', this.getKeyPri)
    },
    computed: {
        ...mapState('home',['productionData']),
        goods_sort(){
            const arr = this.goods.filter((goods)=>{  
                return goods.contend.indexOf(this.keyWord) != -1
            })
            if(this.sortType){
                arr.sort((g1,g2) => {
                    return this.sortType === 1 ? g1.money - g2.money : g2.money - g1.money
                })
            }
            if(this.keyPri.top){
                const Newarr = arr.filter((item)=>{
                    return item.money < this.keyPri.top && item.money > this.keyPri.bottom
            })
            return Newarr
            }
            return arr
        }
    },
    methods:{
        event(index){
            this.sortType = index
            this.current = index
        },
        getKeyWord(data){
            this.keyWord == data ? this.keyWord = '' : this.keyWord = data
        },
        getKeyPri(data){
            (this.keyPri.top == data[1] && this.keyPri.bottom == data[0]) ? (this.keyPri.top = '',this.keyPri.bottom = '' ) : (this.keyPri.bottom = data[0],this.keyPri.top = data[1])
            console.log(this.keyPri.bottom,this.keyPri.top);
        }
    },
    watch:{
        productionData:{
            immediate:true,
            deep:true,
            handler(val){
                this.identify = this.bread == 'IP周边' ? 'IPper' : 'DigitalVideo'
                this.goods = val[this.identify].goods
            }
        }
    },
    beforeDestroy(){
        this.$bus.$off('getKeyBra','getKeyPri')
    }
};
</script>

<style scoped>
.IPpre-modules {
    overflow: hidden;
}

.sortby {
    height: 21px;
    margin: 30px 0 30px 0;
    font-size: 16px;
}

.sortby li {
    float: left;
    padding-right: 16px;
}

.m-product {
    width: 1100px;
    margin: 0 auto;
}

.m-product div {
    width: 100%;
}

.point {
    float: left;
    height: 21px;
    padding-right: 16px;
    background: url(../assets/point.png) left center no-repeat;
}
</style>