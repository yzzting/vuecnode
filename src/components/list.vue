<style lang="less">

.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #42b983;
    color: #42b983;
}

.mint-tabbar>.mint-tab-item.is-selected {
  color: #42b983;
}

.mint-loadmore-content {
  margin-bottom: 50px;
}

.page-part {
    box-shadow: 0 0 4px rgba(0, 0, 0, .25);
  }

.list-box {
  margin-top: 50px;
}

ul {
    li {
        padding: 10px 15px;
        border-bottom: 1px solid #d5dbdb;
    }
    figure {
        &:before {
            min-width: 24px;
            text-align: center;
            padding: 3px 8px;
            display: inline-block;
            margin-right: 10px;
            font-size: 12px;
            content: attr(data-tab);
            color: #fff;
            font-weight: 400;
            vertical-align: middle;
        }
        &.share {
            &:before {
                background: #1ABC9C;
            }
        }
        &.ask {
            &:before {
                background: #3498DB;
            }
        }
        &.job {
            &:before {
                background: #9B59B6;
            }
        }
        &.good {
            &:before {
                background: #E67E22;
            }
        }
        &.top {
            &:before {
                background: #E74C3C;
            }
        }
        color: #2c3e50;
        font-size: 16px;
        line-height: 1.5;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
}

.user-show {
    padding-top: 10px;
    display: flex;
    img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }
    //img end
}

.user-info {
    width: 100%;
    padding-left: 12px;
    flex: 1;
    p {
        display: flex;
        justify-content: space-between;
        padding: 3px 0;
        color: #34495e;
        font-size: 12px
    }
    p:first-child {
        font-size: 14px;
    }
}

// user-info end
.name {
    width: 100%;
    flex: 1;
    display: block;
}

.visitnum {
    b {
        color: #42b983;
    }
}

.moreButton {
  margin: 10px 5px 60px 5px;
    button{
      padding: 0 16px;
      line-height: 32px;
      border-radius: 5px;
      width: 100%;
      max-width: none;
    }
}

.toTop {
  position: fixed;
  right: 10px;
  bottom: 80px;
  font-size: 30px;
  z-index: 9999;
  color: #42b983;
}

@import "../assets/css/iconfont.css";

</style>

<template>

<mt-navbar class="page-part" :selected.sync="selected" fixed>
    <mt-tab-item id="all">全部</mt-tab-item>
    <mt-tab-item id="good">精华</mt-tab-item>
    <mt-tab-item id="share">分享</mt-tab-item>
    <mt-tab-item id="ask">问答</mt-tab-item>
    <mt-tab-item id="job">招聘</mt-tab-item>
</mt-navbar>
  <div class="list-box">
    <ul>
      <li v-for="item in topics" v-link="{name:'topic',params:{id: item.id}}">
        <figure class="tab-style" :class="[{'top': item.top, 'good': item.good}, item.tab]" data-tab="{{item.top === true ? 'top' : item.good === true ? 'good' : item.tab | tab}}">{{item.title}}</figure>
        <div class="user-show">
          <img :src="item.author.avatar_url" alt="photo" />
          <div class="user-info">
            <p>
              <span class="name">{{item.author.loginname}}</span>
              <span class="visitnum"><b>{{item.reply_count}}</b>/{{item.visit_count}}</span>
            </p>
            <p>
              <span class="create-time">{{item.create_at | date 'ago'}}</span>
              <span class="last-reply-time">{{item.last_reply_at | date 'ago'}}</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
    <div class="moreButton">
      <mt-button type="primary" @click="getNextPage()">{{buttonText}}</mt-button>
    </div>
    <!-- <div class="toTop iconfont" @click="toTop()">
      &#xe601;
    </div> -->
</div>

</template>

<script>

import {
    Indicator,
}
from 'mint-ui'
export default {
    data() {
            return {
                topics: [],
                page: 1,
                buttonText:'加载更多',
                top:false
            }
        },
    methods: {
        getNextPage(){
          this.page += 1
          this.getData()
              .then((response) => {
                this.topics = this.topics.concat(response.json().data)
                this.buttonText = '加载更多'
              })
              this.buttonText = '正在加载...'
        },
        getData() {
            return this.$http.get('/api/topics', {
                params: {
                    page: this.page,
                    tab: this.selected,
                    limit:10
                }
            })
        }
    },
    props: [{
        'name': 'selected',
        'default': 'all'
    }],
    ready() {
        Indicator.open({
          text: 'loading...',
          spinnerType:'double-bounce'
        })
        this.getData()
            .then((response) => {
                this.topics = response.json().data
                Indicator.close()
            }, (err) => {
                console.error('err', err);
            })

    },
    watch: {
        selected() {
            this.page = 1
            Indicator.open({
              text:'biu biu biu...',
              spinnerType: 'double-bounce'
            })
            this.getData()
                .then((response) => {
                    this.topics = response.json().data
                    Indicator.close()
                })
        }
    }
}

</script>
