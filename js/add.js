export default Vue.component("add",{
    data(){
        return {
            value:""
        }
    },
    template:`
    <!-- 添加部分 -->
    <div class="add">
        <input type="text" 
        placeholder="What need to be done" 
        class="add-input" 
        v-model="value"
        @keyup.enter="add"
        >
    </div>
    ` ,
    methods:{
        add(){
            this.$emit("addchuan",this.value);
        }
    }
})