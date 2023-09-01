<template>
  <div>
    <!-- 订单信息页面 -->
    <div class="section-goods" v-if="payedShoppingCart.length > 0">
      <p class="titleleft">订单:</p>
      <div class="goods-list" v-for="order in payedShoppingCart" :key="order.number">
        <div class="order-box">
          <span class="order-number">订单编号：{{ order.number }}</span>
          <span class="total-price">支付价格：<i>{{ order.price }}</i></span>

          <div class="address-box">
            <p>送到:</p>
            <div class="address-body">
              <li v-for="item in order.address" :key="item.id">
                <h2>{{item.name}}</h2>
                <p class="phone">{{item.phone}}</p>
                <p class="address">{{item.address}}</p>
              </li>
            </div>
          </div>
          <div class="item-box">
            <ul>
              <li v-for="item in order.shopping" :key="item.id">
                <!-- <img :src="$target + item.productImg" /> -->
                <img class="pro-img" :src=item.img alt="">
                <div class="pro-name">{{item.title}}</div>
                <div class="pro-id">订单号：{{ item.id }}</div>
                <div class="pro-price">应付:{{item.price}}元 x {{item.number}}</div>
                <div class="pro-total">实付：{{item.price * item.number}}元</div>
              </li>
          </ul>
          </div>
          <div class="action-delete" @click="deletePayedShoppingCart(order.number)">删除订单</div>
        </div>
      </div>
    </div>
    <div v-else>
      <h3>你还没有下单，快去看看吧</h3>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name:'PerOrder',
    data(){
      return{
        address:'',
        confromAddress:'',
      }
    },
    computed:{
      ...mapState('user',['payedShoppingCart']),
    },
    methods:{
      deletePayedShoppingCart(number){
        this.$confirm('确定要删除这个订单吗', '删除提示', { type: 'warning' }).then(() => {
          this.$store.dispatch('user/deletePayedShoppingCart',number)
          }).catch(()=>{
            return 0
          })
        }
      },
    created(){
      this.confromAddress = JSON.parse(sessionStorage.getItem('address'))
      this.address = this.$store.state.user.address.find(item=>item.id == this.confromAddress)

    },
}
</script>

<style scoped>
.section-goods {
  width: 800px;
  margin: 0 auto;
  overflow: hidden;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}
.total-price{
  margin-left:30px ;
  
}
.total-price i{
  color: #d33a31;
  font-size: 20px;
  font-style: normal;
}
.order-number{
  padding-bottom: 20px;
  font-weight: bold;
  color:black;
}

.order-box{
  width: auto;
}
.order-box:hover .action-delete{
  display: block;
}
.address-box{
  float: right;
}
.item-box ul{
  width: auto;
  min-height: 180px;
  padding-bottom: 30px;
}
.item-box ul li {
  margin-bottom: 15px;
  width: 513px;
}
.titleleft {
  color: #333;
  font-size: 18px;
  line-height: 40px;
}
.goods-list {
  position: relative;
  padding: 5px 0;
  overflow: hidden;
  border-bottom: 1px solid #e0e0e0;
}
.goods-list li {
  color: #424242;
  overflow: hidden;
}
.goods-list li img {
  float: left;
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.goods-list li .pro-img {
  width: 80px;
  height: 80px;
}
.goods-list li .pro-name {
  line-height: 30px;
  white-space:nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-list li .pro-id{
  line-height: 30px;
}
.goods-list li .pro-price {
  line-height: 30px;
}
 .goods-list li .pro-total {
  color: #d33a31;
  line-height: 30px;
}
.action-delete{
  position: absolute;
  display: none;
  bottom: 10px;
  width: 70px;
  height: 20px;
  line-height: 20px;
  cursor: pointer;
  text-align: center;
  border: 1px solid #d33a31;
  border-radius: 5%;

}
</style>