export default Vue.component("filterlist",{
    template:`
    <!-- 筛选部分 -->
    <div class="filter">
        <button @click="filter('all')">全部</button>
        <button @click="filter('ok')">已完成</button>
        <button @click="filter('no')">未完成</button>
        <button @click="chiocedel">勾选删除</button>
        <button @click="alldel">全部删除</button>
    </div>
    `,
    methods:{
        filter(sign){
            this.$emit("filtersign",sign);
        },
        alldel(){
            this.$emit("alldel");
        },
        chiocedel(){
            this.$emit("chiocedel");
        }
    }
})