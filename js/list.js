export default Vue.component("list", {
    props: ["list"],
    template: `
    <!-- 渲染列表部分 -->
    <div class="list">
        <ul>
            <li v-for="(val,index) in list">
                <div class="list-item">
                    <input type="checkbox" :check="val.checked" v-model="val.checked">
                    <p v-show="val.flag" @click="val.flag=false" :class="{'choice':val.checked}"> {{val.value}}</p>
                    <input type="text" v-show="!val.flag" @keyup.enter="change(val.id)" v-model="val.value">
                    <button @click="del(val.id)">删除</button>
                </div>
            </li>
        </ul>
    </div>
    `,
    methods: {
        del(id) {
            this.$emit("delid", id);

        },
        change(id) {
            this.$emit("changeid", id);
        },
    }
})