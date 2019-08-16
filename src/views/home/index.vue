<template>
  <div class="root">
    <div style="width:100%;height:160px;background:#AC0300;padding:15px;">
      <!-- <van-search placeholder="搜索商品" v-model="value"/> -->
      <!-- 搜索框 -->
      <div class="searchBar">
        <div class="searchIcon">
          <van-icon name="search" size="28" />
        </div>
        <input type="text" />
      </div>
      <!-- 轮播图 -->
      <div>
        <van-swipe :autoplay="2000" indicator-color="white">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <div 
            style="width:100%;height:125px;margin-top:10px; border-radius:10px;"
            >
              <img v-lazy="image" />
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div style="background:white;padding:15px;">
      <!-- 选项卡 -->
      <div class="chooseBar">
        <div class="chooseItem" v-for="(item, index) in chooseBar" :key="index">
          <div class="chooseIcon">
            <img :src="item.icon" alt />
          </div>
          <div class="chooseText">
            <span>{{ item.text }}</span>
          </div>
        </div>
      </div>
      <!-- 广告 -->
      <div class="adBar">
        <div class="adText">
          甘露
          <span>资讯</span>
          |{{ adText }}
        </div>
        <div class="adMore">更多</div>
        <br style="clear:both" />
      </div>
      <!-- 最新活动 -->
      <div class="newBar">
        <div class="newHead">
          <div class="newIcon">
            <img :src="redImg" alt />
          </div>
          <div class="newTitle">最新活动</div>
          <br style="clear:both" />
        </div>
        <div class="newBody">
          <div v-for="(item, index) in newBar" :key="index">
            <div v-if="item.id == 1" class="newItem1">
              <img :src="item.img" alt />
            </div>
            <div v-else class="newItem2">
              <div style="float:left">
                <div style="padding:12px;font-size:14px;">{{ item.title }}</div>
                <div style="font-size:13px;color:#666666;margin-left:5px;">
                  {{ item.ps }}
                  </div>
              </div>
              <div class="newImg">
                <img :src="item.img" alt />
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>

      <!-- 热门产品 -->
      <div class="hotBar">
        <div class="hotHead">
          <div class="hotIcon">
            <img :src="hotImg" alt />
          </div>
          <div class="hotTitle">热门产品</div>
          <br />
        </div>
        <div class="hotBody">
          <!-- <div v-for="(item,index) in hotBar" :key="index"></div> -->
          <van-grid :border="false" :column-num="3">
            <van-grid-item
              v-for="(item, index) in hotBar"
              :key="index"
              style="border:1px solid rgba(221,221,221,1)"
            >
              <div style="font-size:14px;">{{ item.title }}</div>
              <div style="color:#666666;font-size:13px;margin-top:10px">
                {{ item.ps }}
              </div>
              <div class="hotPrice">￥{{ item.price }}</div>
              <div style="margin-top:10px;">
                <img :src="item.img" alt />
              </div>
            </van-grid-item>
          </van-grid>
        </div>
      </div>

      <!-- 图片分割 -->
      <div class="imgBar">
        <img :src="imgBar" alt />
      </div>

      <!-- 藏药配方 -->
      <div class="methodBar">
        <div class="methodHead">
          <div class="methodIcon">
            <img :src="methodImg" alt />
          </div>
          <div class="methodTitle">藏药配方</div>
          <br />
        </div>
        <van-tabs>
          <van-tab v-for="(item,index) in methodBar" :key="index" :title="item.title">
            <div class="cardList">
              <gy-commodity-card
                v-for="(value , index1) in item.cardList"
                :key="index1"
                :data="value"
                @card-click="$router.push('/detail')"
                @icon-click="$router.push('/detail')"
                class="cardItem"
              ></gy-commodity-card>
            </div>
            <br />
          </van-tab>
        </van-tabs>
      </div>

      <!-- 藏医组方 -->
      <div class="knowledgeBar">
        <div class="knowledgeHead">
          <div class="knowledgeIcon">
            <img :src="knowledgeImg" alt />
          </div>
          <div class="knowledgeTitle">藏医组方</div>
          <div style="float:right;margin-right:5px;">
            <van-icon name="arrow" />
          </div>
          <br />
        </div>

        <div class="knowledgeBody">
          <div 
          class="knowledgeItem" 
          v-for="(item, index) in knowledgeBar" 
          :key="index">
            <div class="knowledgeName">{{ item.title }}</div>
            <div class="knowledgeToast">{{ item.toast }}</div>
            <div class="knowledgeNum">阅读{{ item.num }}万</div>
            <br />
          </div>
        </div>
      </div>
    </div>
    <div style="width:100%;height:50px;border:1px solid white;"></div>
  </div>
</template>

<script>
import CommodityCard from "../../components/CommodityCard.vue";
export default {
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg ",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      chooseBar: [
        {
          icon: require("../../assets/images/homeImg/shoper.png"),
          text: "店长推荐"
        },
        {
          icon: require("../../assets/images/homeImg/methods.png"),
          text: "藏药组方"
        },
        {
          icon: require("../../assets/images/homeImg/knowledge.png"),
          text: "藏药知识"
        },
        {
          icon: require("../../assets/images/homeImg/special.png"),
          text: "西藏特产"
        }
      ],
      adText: "“我与藏医聊藏药”之七十味珍珠丸专题第一期",
      redImg: require("../../assets/images/homeImg/red.png"),
      newBar: [
        {
          img: require("../../assets/images/homeImg/newImg.png"),
          id: 1,
          title: "失眠必备",
          ps: "加20元多1件"
        },
        {
          img: require("../../assets/images/homeImg/newImg.png"),
          id: 2,
          title: "失眠必备",
          ps: "加20元多1件"
        },
        {
          img: require("../../assets/images/homeImg/newImg.png"),
          id: 3,
          title: "东阿阿胶",
          ps: "抢40元专享卷"
        }
      ],
      hotImg: require("../../assets/images/homeImg/fire.png"),
      hotBar: [
        {
          title: "感冒发烧",
          ps: "感康12片装",
          price: "88.00",
          img: require("../../assets/images/homeImg/newImg.png")
        },
        {
          title: "护肝利喉",
          ps: "枇杷膏 150ml",
          price: "88.00",
          img: require("../../assets/images/homeImg/newImg.png")
        },
        {
          title: "心脑血管",
          ps: "感康12片装",
          price: "88.00",
          img: require("../../assets/images/homeImg/newImg.png")
        }
      ],
      imgBar: require("../../assets/images/homeImg/lunboImg.png"),
      methodImg: require("../../assets/images/homeImg/method.png"),
      methodBar: [
        {
          title: "感冒发烧",
          id: 1,
          cardList: [
            {
              imgUrl: require("../../assets/images/medicinal.png"),
              title: "脑梗，血栓",
              desc: "七十味中药材就、+二十五味珍珠丸",
              price: 360
            },
            {
              imgUrl: require("../../assets/images/medicinal.png"),
              title: "脑梗，血栓",
              desc: "七十味中药材就、+二十五味珍珠丸",
              price: 360
            },
            {
              imgUrl: require("../../assets/images/medicinal.png"),
              title: "脑梗，血栓",
              desc: "七十味中药材就、+二十五味珍珠丸",
              price: 360
            },
            {
              imgUrl: require("../../assets/images/medicinal.png"),
              title: "脑梗，血栓",
              desc: "七十味中药材就、+二十五味珍珠丸",
              price: 360
            }
          ]
        },
        {
          title: "咳嗽用药",
          id: 2,
          cardList: [
            {
              imgUrl: require("../../assets/images/medicinal.png"),
              title: "脑梗，血栓",
              desc: "七十味中药材就、+二十五味珍珠丸",
              price: 360
            },
            {
              imgUrl: require("../../assets/images/medicinal.png"),
              title: "脑梗，血栓",
              desc: "七十味中药材就、+二十五味珍珠丸",
              price: 360
            },
            {
              imgUrl: require("../../assets/images/medicinal.png"),
              title: "脑梗，血栓",
              desc: "七十味中药材就、+二十五味珍珠丸",
              price: 360
            },
            {
              imgUrl: require("../../assets/images/medicinal.png"),
              title: "脑梗，血栓",
              desc: "七十味中药材就、+二十五味珍珠丸",
              price: 360
            }
          ]
        },
        {
          title: "咳嗽用药",
          id: 3,
          cardList: [
            {
              imgUrl: require("../../assets/images/medicinal.png"),
              title: "脑梗，血栓",
              desc: "七十味中药材就、+二十五味珍珠丸",
              price: 360
            },
            {
              imgUrl: require("../../assets/images/medicinal.png"),
              title: "脑梗，血栓",
              desc: "七十味中药材就、+二十五味珍珠丸",
              price: 360
            },
            {
              imgUrl: require("../../assets/images/medicinal.png"),
              title: "脑梗，血栓",
              desc: "七十味中药材就、+二十五味珍珠丸",
              price: 360
            }
          ]
        },
        {
          title: "咳嗽用药",
          id: 4,
          cardList: [
            {
              imgUrl: require("../../assets/images/medicinal.png"),
              title: "脑梗，血栓",
              desc: "七十味中药材就、+二十五味珍珠丸",
              price: 360
            }
          ]
        },
        {
          title: "咳嗽用药",
          id: 5,
          cardList: [
            {
              imgUrl: require("../../assets/images/medicinal.png"),
              title: "脑梗，血栓",
              desc: "七十味中药材就、+二十五味珍珠丸",
              price: 360
            },
            {
              imgUrl: require("../../assets/images/medicinal.png"),
              title: "脑梗，血栓",
              desc: "七十味中药材就、+二十五味珍珠丸",
              price: 360
            },
            {
              imgUrl: require("../../assets/images/medicinal.png"),
              title: "脑梗，血栓",
              desc: "七十味中药材就、+二十五味珍珠丸",
              price: 360
            },
            {
              imgUrl: require("../../assets/images/medicinal.png"),
              title: "脑梗，血栓",
              desc: "七十味中药材就、+二十五味珍珠丸",
              price: 360
            }
          ]
        }
      ],
      knowledgeImg: require("../../assets/images/homeImg/knowledge2.png"),
      knowledgeBar: [
        { title: "藏药的八大优势", toast: "必读", num: "4.8" },
        {
          title: "心脑血管类病患的良友--七十味珍珠丸",
          toast: "置顶",
          num: "5.0"
        },
        {
          title: "二十五味鬼臼丸可以治疗妇科炎症吗？",
          toast: "置顶",
          num: "4.8"
        },
        { title: "西藏颁布首个地区藏药材标准", toast: "热", num: "3.3" },
        { title: "神奇的藏医药—“欧曲坐珠钦莫”", toast: "热", num: "4.8" }
      ]
    };
  },
  components: {
    // "van-search":Search
    // "van-swipe ": Swipe,
    // "van-swipe-item": SwipeItem
    [CommodityCard.name]: CommodityCard
  }
};
</script>

<style lang="scss" scoped>
.root {
}
.searchBar {
  background: white;
  width: vw(690);
  height: 30px;
  border-radius: 15px;
  position: relative;
}
.searchIcon {
  text-align: left;
  margin-left: 15px;
  padding: 0;
  display: inline;
}
.searchBar input {
  height: 30px;
  // background:yellow;
  position: absolute;
  top: 0;
  left: 50px;
  border: 0; // 去除未选中状态边框
  outline: none; // 去除选中状态边框
  background-color: rgba(0, 0, 0, 0); // 透明背景
}
.chooseBar {
  width: 100%;
  height: 110px;
  text-align: center;
}
.chooseItem {
  width: 25%;
  height: 110px;
  box-sizing: border-box;
  float: left;
}
.chooseIcon {
  width: vw(105);
  margin-left: vw(34);
  height: auto;
  margin-top: 20px;
}
.chooseText {
  margin-top: 10px;
  font-size: 14px;
}
.adBar {
  width: 100%;
  height: 35px;
  background: rgba(245, 245, 245, 1);
  margin-top: 12px;
  font-size: 12px;
}
.adText {
  height: 20px;
  font-weight: 300;
  color: rgba(51, 51, 51, 1);
  float: left;
  margin-top: 12px;
}
.adText span {
  color: #e91c19;
}
.adMore {
  float: right;
  margin-right: 4px;
  margin-top: 12px;
}
.newBar,
.hotBar,
.methodBar {
  width: 100%;
  margin-top: 15px;
}
.newHead,
.hotHead,
.methodHead {
  height: 30px;
}

.newIcon,
.hotIcon,
.methodIcon,
.knowledgeIcon {
  width: vw(28);
  height: auto;
  float: left;
}
.newTitle,
.hotTitle,
.methodTitle,
.knowledgeTitle {
  float: left;
  font-weight: 400;
  margin-left: 5px;
}
.newBody {
  width: 100%;
  height: 120px;
}
.newItem1,
.newItem2 {
  border: 1px solid rgba(221, 221, 221, 1);
  float: left;
}
.newItem1 {
  width: 50%;
  height: 120px;
}
.newItem2 {
  width: 50%;
  height: 60px;
}
.newImg {
  width: vw(137);
  height: auto;
  float: right;
  margin-top: 9px;
  margin-right: 8px;
}
.hotPrice {
  background: #ac0300;
  width: 50px;
  height: 15px;
  padding: 0;
  text-align: center;
  color: white;
  line-height: 15px;
  border-radius: 7.5px;
  font-size: 10px;
  margin-top: 10px;
}
.imgBar {
  margin-top: 15px;
  border-radius: 10px;
}
.knowledgeItem {
  width: 100%;
  height: 58px;
  border-bottom: 1px solid rgba(221, 221, 221, 1);
}
.knowledgeName {
  font-size: 14px;
  margin-top: 10.5px;
}
.knowledgeToast {
  // height: 15px;
  border: 2px solid #ac0300;
  text-align: center;
  font-size: 10px;
  line-height: 12px;
  padding: 2.5px 5px;
  color: #ac0300;
  float: left;
  margin-top: 10px;
}
.knowledgeNum {
  float: left;
  color: #999999;
  font-size: 10px;
  margin-left: 10px;
  margin-top: 15px;
}
.cardList {
  margin-top: 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: flex-start;
  width: 100%;
}
.cardItem {
  width: 47%;
  margin-bottom: 10px;
}
</style>
