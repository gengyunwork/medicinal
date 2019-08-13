<template>
    <div>
        <div class="head">
            <div class="headImg">
                <img :src="userImg" alt="">
            </div>
            <div class="headName"><span>{{userName}}</span></div>
        </div>
        <div class="body">
            <img :src="userPic" alt="">
        </div>
        <div class="foot">
            {{userText}}
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
             userImg: require("../../assets/images/userImg/userImg.png"),
            userName: "章鱼哥",
            userPic:require("../../assets/images/userImg/userPic.png"),
            userText:"asdaksdjhasdakldjasasasdasd"
        }
    }
}
</script>

<style>
.head{
    padding: 65px 120px 30px 120px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
}
.headImg {
    width: 50px;
    height: 50px;
}
.headName {
    font-size: 18px;
    font-weight: 600;
    margin-left: 10px;
}
.body {
    margin: 0 auto;
    width: 200px;
    height:200px;
}
.foot {
    width: 170px;
    padding-top: 23px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    white-space:normal;
         word-break:break-all;
         word-wrap:break-word; 
}
</style>
