const state = {
    status:false,
    login:JSON.parse(sessionStorage.getItem('login')) || false,
    payedShoppingCart:JSON.parse(localStorage.getItem('payedShoppingCart')) || [],
    address:[
        {
            id: 1,
            name: "陈同学",
            phone: "17723757598",
            address: "重庆 开州区 三溪镇xxxx"
          },
        {
            id: 2,
            name: "陈同学",
            phone: "19967748771",
            address: "广东 茂名市 化州市 杨梅镇 ***"
        }
    ]
}
const mutations = {
    changeStatus:(state,data) => {
        state.status = data
        // sessionStorage.setItem('login',data)
    },
    unshiftPayedShoppingCart(state,data){
        state.payedShoppingCart.unshift(data)
        localStorage.setItem('payedShoppingCart',JSON.stringify(state.payedShoppingCart))
    },
    deletePayedShoppingCart(state,number){
        // push,pop,shift,unshift,splice,sort,reverse 这些修改原数组
        state.payedShoppingCart = state.payedShoppingCart.filter(item => {
            return item.number != number
        });
        localStorage.setItem('payedShoppingCart',JSON.stringify(state.payedShoppingCart))
    }
}
const actions = {
    unshiftPayedShoppingCart({commit},data){
        commit('unshiftPayedShoppingCart',data)
    },
    deletePayedShoppingCart({commit},number){
        commit('deletePayedShoppingCart',number)
    },

    /**
     * 登录
     * @param {Object} param0 
     * @param {Boolean} data 
     */
    login({commit}, data) {
        commit('changeStatus', data)
    },

    /**
     * 检测用户是否登录
     * @param {Object} param0 
     * @returns {Promise}
     */
    check({state}) {
        return new Promise((resolve) => {
            if (state.login) {
                resolve(true)
            } else {        
                resolve(false)
            }
        })
    }
}
const getters = {
    getLogin(state){
        return state.login
    }
}
export default {
    namespaced: true,//开启名命空间
    state,
    mutations,
    actions,
    getters
}