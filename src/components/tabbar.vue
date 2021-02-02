<template>
    <div class="tabbar">
        <router-link v-for="(item,index) in tabbarList" :key="index"
        class="tab-item"
        :to="item.path"
        active-class="isActive">
            <div class="item-wrap">{{item.name}}</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name :"tabbar",
    props:{
        tabbarList:Array
    },
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>
<style scoped>
    .tabbar{
        width:100%;
        height: 3.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position:fixed;
        background: #ffffff;
        bottom: 0px;
        left: 0px;
    }
    .isActive{
        color:aquamarine;
    }
    .tab-item{
        flex:1;
        font-size:14px;
        height:100%;
    }
    .item-wrap{
        width:100%;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    a{
        text-decoration:none;
        color:#333;
    }
    a,a:hover,a:active,a:visited,a:link,a:focus{
        -webkit-tap-highlight-color:rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;
        outline:none;
        background: none;
        text-decoration: none;
    }
</style>