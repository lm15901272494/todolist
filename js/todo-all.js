// 总组件

//引入各种子组件
import add from "./add.js";
import list from "./list.js";
import filterlist from "./filter.js";
//创建并导出  todoall组件
export default Vue.component("todoall", {
    data() {
        return {
            arr: [],
            sign:"all",
            choiceidarr:[],
        }
    },
    template: `
    <div class="page">
            <!-- 添加部分 -->
              <add @addchuan="addshou"></add>
            <!-- 渲染列表部分 -->
             <list :list="newarr" @delid="delid" @changeid="changeid" />
             <!-- 筛选部分 -->

            <filterlist @filtersign="filtersign" @alldel="alldel" @chiocedel="chiocedel"></filterlist>
        </div>
    `,
    //计算属性，为将要被渲染到list组件中的数据进行处理
    computed:{
        newarr:function(){
            switch (this.sign) {
                case "all":
                    return this.arr;
                case "ok":
                    //当list-item 中checked==true时--已完成任务
                    return this.arr.filter(val => val.checked == true);
                case "no":
                     //当list-item 中checked==false--未完成任务
                    return this.arr.filter(val => val.checked == false);
                case "":
                    return this.arr;
            }
        }

    },

    methods: {
        //接收数据并将数据添加到父组件数组中
        addshou(res) {
            let obj = {
                id: new Date().getTime(),
                checked: false,
                value: res,
                flag: true,
            }
            this.arr.push(obj);
        },
        //删除列表中的明细
        delid(id) {
            let index = this.arr.findIndex(val => val.id == id);
            this.arr.splice(index, 1);
        },
        //单击更改
        changeid(id) {
            let index = this.arr.findIndex(val => val.id == id);
            this.arr[index].flag = true;
        },
        //勾选默认完成
        // 在list组件中即可完成此事件
       
        //筛选数据
        filtersign(res) {
           this.sign=res;
        },
        //全部删除
        alldel(){
            this.arr=[];
            console.log(134)
        },
        //勾选删除
        chiocedel(){
            this.arr.map(val=>{
                if(val.checked==true)
                this.choiceidarr.push(val)
            })
            for(let i=0;i<this.arr.length;i++){
                for(let j=0;j<this.choiceidarr.length;j++){
                    if(this.arr[i].id==this.choiceidarr[j].id){
                        this.arr.splice(i,1);
                    }

                }
            }
        }

    }

})



//创建vue实例对象，并将其绑定到元素#box上
const vm = new Vue({
    el: "#box",
})