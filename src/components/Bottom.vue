<template>
    <!-- 底部版权相关信息 -->
    <div class="bottom">
        <div class="bottom-m">
            <div>
                <div class="copy">
                    <p class="bottomcopy"><a :href="item.href" v-for="(item,index) in bottomNav" :key="index">{{item.title}}<span class="copyline" v-show="index !== bottomNav.length-1">|</span></a></p>
                    <p class="bottomcopy3"><span>网易公司版权所有©1997-2023</span>杭州乐读科技有限公司运营：
                        <a href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/26948638583/e95b/ceec/7e82/959e2538f30496f8c769361fb15daba1.jpg">
                            浙网文[2021] 1186-054号
                        </a>
                    </p>
                    <p class="bottomcopy3"><a href="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/11202823048/cd21/9c11/b6ec/a94ff538fff84c7efd4529ed8f6b0c4e.png">食品经营许可证</a>
                        <a href="https://y.music.163.com/m/at/642fe38f10c8de583f53e97e">出版物经营许可证</a>&nbsp;
                        <a href="https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/29282378396/cc98/4b70/e976/fd7c0aecfbcc61a8e583713e225faec5.jpg">营业执照</a>&nbsp;
                        <span>网络食品交易第三方平台提供者信息备案: 浙网食A33010041</span>
                        <a href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5825415123/2c76/c197/f6f7/5f2911c26f2a4a4cc2f89e50e7959d31.jpg">进口冷链管理承诺书</a></p>
                    <p class="bottomcopy3"  >
                        <span>粤B2-20090191-18</span>举报邮箱:
                        <a href="https://beian.miit.gov.cn/#/Integrated/index">工业和信息化部备案管理系统网站</a>
                    </p>
                </div>
                <ul class="enternav">
                    <li><a class="logo " href="/recruit" :style="{backgroundPosition:'-60px -80px'}"></a></li>
                    <li><a class="logo " href="/topic/recruit" :style="{backgroundPosition:'0 -80px'}"></a></li>
                    <li><a class="logo " href="/topic/selfmedia" :style="{backgroundPosition:'0 0'}"></a></li>
                    <li><a class="logo " href="/web/reward" :style="{backgroundPosition:'-60px 0',marginRight:'0px'}"></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'BottomName',
    data(){
        return{
            bottomNav:[
            {title:'服务条款',href:'//st.music.163.com/official-terms/service'},
            {title:'隐私政策',href:'//st.music.163.com/official-terms/privacy'},
            {title:'儿童隐私政策',href:'//st.music.163.com/official-terms/privacy'},
            {title:'版权投诉指引',href:'//music.163.com/st/staticdeal/complaints.html'},
            {title:'联系我们',href:'https://mp.music.163.com/600948c936c13f4d09752e73/contact-us-web/index.html?source=Music-Mall'}
        ]
        }
    }
}
</script>

<style>
.bottom{
    height: 160px;
    margin-top: -120px;
    background: #f2f2f2;
}
.bottom-m{
    width: 1100px;
    margin: 0 auto;
}
.copy{
    float: left;
    font-size: 12px;
    width: 700px;
    padding-top: 22px;
    line-height: 24px;
}
.copy p{ 
    float: left;
}
.copy p a:hover {
    text-decoration:underline;
}
.copyline{
    margin: 0 8px 0 10px;
    color: #c2c2c2;
    line-height: 24px;
}
.bottomcopy a{
    color: #999;
}
.bottomcopy3 span{
    margin-right: 14px;
}
.enternav{
    width: 330px;
    margin-top: 30px;
    float: right;
}
.enternav li {
    list-style: none;
}
.logo{
    float: left;
    width: 60px;
    height: 70px;
    margin-right: 30px;
    background-image: url('../assets/foot_enter.png');
}
</style>