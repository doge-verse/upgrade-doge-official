<template>
  <div id="mainPage">
    <div class="headerBox">
      <div class="logoBox">
        <img src="@/static/logo.svg" alt="">
        UPGRADE-DOGE
      </div>

      <div class="actionBox">
        <div class="menu">
          <div class="home">HOME</div>
          <div class="tools">
            <Tooltip
              placement="bottom"
            >
              TOOLS
              <div slot="content">
                <div class="selectBox" @click="toTools(0)">
                  <div class="imgBox">
                    <img src="@/static/network.svg" class="no_ac network" alt="">
                    <img src="@/static/network_ac.svg" class="ac network" alt="">
                  </div>
                  Network files parser
                </div>
                <div class="selectBox" @click="toTools(1)">
                  <div class="imgBox">
                    <img src="@/static/notifier.svg" class="no_ac notifier" alt="">
                    <img src="@/static/notifier_ac.svg" class="ac notifier" alt="">
                  </div>
                  Notifier Service
                </div>
              </div>
            </Tooltip>
          </div>
          <div class="docs" @click="toDocs">DOCS</div>
        </div>

        <div class="community">
          <div class="imgBox" @click="toGithub()">
            <img src="@/static/git.svg" class="no_ac" alt="">
            <img src="@/static/git_ac.svg" class="ac" alt="">
          </div>
          <div class="imgBox">
            <img src="@/static/tw.svg" class="no_ac" alt="">
            <img src="@/static/tw_ac.svg" class="ac" alt="">
          </div>
          <div class="imgBox">
            <img src="@/static/dc.svg" class="no_ac" alt="">
            <img src="@/static/dc_ac.svg" class="ac" alt="">
          </div>
        </div>

        <div class="startBtn" @click="toStart">GET STARTED</div>
      </div>
    </div>

    <div class="getStartBox">
      <div class="container">
        <div class="left">
          <div class="title">DECENTRALIZED.SIMPLE.TIMELY</div>
          <div class="content">
            UPGRADEABLE<br/>
            SMART CONTRACT<br/>
            TOOLKIT
          </div>
          <div class="startBtn" @click="toStart">GET STARTED</div>
        </div>

        <div class="right">
          <img src="@/static/toolDoge.svg" class="toolDoge" alt="">
          <img src="@/static/toolDogeBg.svg" class="toolDogeBg" alt="">
        </div>
      </div>
    </div>

    <div class="toolsBox">
      <div class="container">
        <div class="title">TOOLS</div>
        <div class="contentBox">
          <div class="selectBox">
            <div class="network" :class="{ac: toolsSelected == 0}" @click="selectTools(0)">
              <img src="@/static/network.svg" v-if="toolsSelected != 0" class="networkImg" alt="">
              <img src="@/static/network_ac.svg" v-if="toolsSelected == 0" class="networkImg" alt="">
              Network files parser
            </div>
            <div class="notifier" :class="{ac: toolsSelected == 1}" @click="selectTools(1)">
              <img src="@/static/notifier.svg" v-if="toolsSelected != 1" class="notifierImg" alt="">
              <img src="@/static/notifier_ac.svg" v-if="toolsSelected == 1" class="notifierImg" alt="">
              Notifier Service
            </div>
          </div>
          <img src="@/static/line.svg" class="line" alt="">
          <div class="showBox">
            <template v-if="toolsSelected == 0">
              <div class="title">Network files parser</div>
              <div class="context">
                User imports the openzeppelin network file, and the tool parses the file contents and displays the relevant contracts administrator info. This allows the project administrator to check the privilege of contracts.
              </div>
              <div class="learnM" @click="toLearnMore(0)">Learn more  ></div>
            </template>
            <template v-if="toolsSelected == 1">
              <div class="title">Notifier Service</div>
              <div class="context">
                Users subscribe to a reminder service to listen to upgradable permission change events of key contracts in real time, which is convenient for project managers to find the changes of upgradable permission of contracts in the first time and avoid losses in advance.
              </div>
              <div class="learnM" @click="toLearnMore(1)">Learn more  ></div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="whyBox">
      <div class="container">
        <div class="title">Why Upgrade Doge</div>

        <div class="contentBox">
          <div class="left">
            <div class="subTitle">Parse network files locally</div>
            <div class="context">
              Parser is a pure native dApp that only run in the browser and will not send user contract information to any server.
            </div>
          </div>
          <div class="right">
            <img src="@/static/why1.svg" alt="">
          </div>
        </div>
  
        <div class="contentBox">
          <div class="left"><img src="@/static/why3.svg" alt=""></div>
          <div class="right">
            <div class="subTitle">Decentralized storage of network files</div>
            <div class="context">
              In openzeppelin's official documentation, developers are advised to commit network files to source control . You can also use Upgrade-Doge to save key network files to the decentralized database like Filecoin, ETHStorage and DB3.
            </div>
          </div>
        </div>
  
        <div class="contentBox">
          <div class="left">
            <div class="subTitle">Help projects escape the vortex of hacking</div>
            <div class="context">
              Providing a series of tools for Openzeppelin-based upgradeable contract projects.In particular, the friendly interactive interface is used to enable non-technical members to view and manage the contract upgrade authority conveniently and timely.
            </div>
          </div>
          <div class="right">
            <img src="@/static/why2.svg" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="communityBox">
      <div class="container">
        <div class="left">
          <div class="title">VIBRANT COMMUNITY </div>
          <div class="context">
            Great tech attracts great people. Join the doge-verse community to find answers to your problems and contribute to the plugin ecosystem.
          </div>
          <div class="joinBtn" @click="toCommunity">JOIN IN NOW</div>
        </div>
        <div class="right">
          <img src="@/static/hiDoge.svg" alt="">
        </div>
      </div>
    </div>


    <div class="footBox">
      <div class="box">
        <div class="title">Built by team</div>
        <img src="@/static/cangshan.svg" class="cangshan" alt="">
      </div>
      <div class="box">
        <div class="title">Supported by</div>
        <img src="@/static/ant.svg" class="ant" alt="">
        <img src="@/static/ant_name.svg" class="antName" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainPage',
  data () {
    return {
      curCarouselNum: 0,
      carouselTotal: 2, //total - 1
      setting: {
        autoplay: true,
        autoplaySpeed: 5000,
        trigger: 'click',
        arrow: 'hover'
      },
      toolsSelected: 0, //0 Network files parser   1 Notifier
    }
  },
  methods: {
    carouselArrow(flag) {
      console.log(flag, this.curCarouselNum);
      
      switch (flag) {
          case 'last':
            if (this.curCarouselNum == 0) {
              this.curCarouselNum = this.carouselTotal;
            } else {
              this.curCarouselNum = this.curCarouselNum - 1;
            }
            break;
          case 'next':
            if (this.curCarouselNum == this.carouselTotal) {
              this.curCarouselNum = 0;
            } else {
              this.curCarouselNum = this.curCarouselNum + 1;
            }
            break;
          default:
            break;
      }
    },
    toTools(id) {
      if(id == 0) {
        window.open("https://app.upgrade-doge.xyz/#/parser");
      } else {
        window.open("https://app.upgrade-doge.xyz/#/notifier");
      }
    },
    selectTools(value, scroll) {
      this.toolsSelected = value;

      if (scroll) {
        window.scrollTo(
          {
            top: 648,
            behavior: 'smooth'
          }
        );
      }
    },
    toDocs() {
      window.open("https://docs.upgrade-doge.xyz/");
    },
    toStart() {
      window.open("https://app.upgrade-doge.xyz/");
    },
    toLearnMore(id) {
      if(id == 0) {
        window.open("https://docs.upgrade-doge.xyz/use-cases/manage-proxy-contract");
      }else{
        window.open("https://docs.upgrade-doge.xyz/use-cases/create-notifications");
      }
    },
    toCommunity() {
      window.open("https://github.com/orgs/doge-verse/");
    },
    toGithub() {
      window.open("https://github.com/orgs/doge-verse/");
    }
  }
}
</script>

<style lang="scss">
  #mainPage {
    width: 100%;
    height: auto;
    min-height: 100vh;
    background-color: #181A1F;
    overflow-x: hidden;

    .headerBox {
      width: 100vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30px 24.4vw 30px 1.7vw;

      .logoBox {
        display: flex;
        font-family: 'CAI978-388';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 38px;
        color: #fff;
        cursor: pointer;

        img {
          height: 38px;
          margin-right: 8px;
        }
      }

      .actionBox {
        display: flex;
        align-items: center;

        .menu {
          height: 20px;
          display: flex;
          font-family: 'Arial';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: #FFFFFF;

          .home, .tools, .docs {
            margin: 0 31px 0;
            border-bottom: 0 solid #fff;
            cursor: pointer;

            &:hover {
              border-bottom: 1px solid #fff;
            }
          }

          .tools {
            .ivu-tooltip {
              .ivu-tooltip-popper {
                .ivu-tooltip-content {
                  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);

                  .ivu-tooltip-arrow {
                    display: none;
                  }

                  .ivu-tooltip-inner {
                    width: 360px;
                    max-width: unset;
                    background: #181A1F;
                    padding: 20px 16px;
                    border-radius: 0;

                    .selectBox {
                      display: flex;
                      align-items: center;
                      cursor: pointer;
                      font-family: 'Arial';
                      font-style: normal;
                      font-weight: 400;
                      font-size: 20px;
                      line-height: 22px;
                      color: #DADADA;

                      &:nth-child(1) {
                        margin-bottom: 26px;
                      }

                      .imgBox {
                        cursor: pointer;
                        margin: 0 15px 0;

                        .network {
                          width: 58px;
                          height: 79px;
                          margin: 0 12px 0 0;
                        }

                        .notifier {
                          width: 70px;
                          height: 52px;
                        }

                        .ac {
                          display: none;
                        }
                      }

                      &:hover {
                        color: #fff;

                        .no_ac {
                          display: none;
                        }

                        .ac {
                          display: unset;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        .community {
          display: flex;
          margin: 0 53px 0 28px;
          
          .imgBox {
            cursor: pointer;
            margin: 0 15px 0;
            display: flex;
            align-items: center;

            img {
              width: 22px;
            }

            .ac {
              display: none;
            }

            &:hover {
              .no_ac {
                display: none;
              }

              .ac {
                display: unset;
              }
            }
          }
        }

        .startBtn {
          font-family: 'Arial';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          color: #FFFFFF;
          line-height: 29px;
          text-align: center;
          width: 130px;
          height: 29px;
          border: 1px solid #FFFFFF;
          border-radius: 9px;
          cursor: pointer;

          &:hover {
            background-color: #FF781D;
            border-radius: 9px;
            border: 1px solid #FF781D;
          }
        }
      }
    }

    .getStartBox {
      width: 100vw;
      padding-top: 101px;

      .container {
        width: 1020px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;

        .left {
          padding-top: 40px;

          .title {
            font-family: 'Arial';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 26px;
            color: #FFFFFF;
            margin-bottom: 27px;
          }

          .content {
            font-family: 'CAI978-388';
            font-style: normal;
            font-weight: 400;
            font-size: 64px;
            line-height: 76px;
            color: #FFFFFF;
            margin-bottom: 27px;
          }

          .startBtn {
            font-family: 'Arial';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: #FFF;
            line-height: 63px;
            text-align: center;
            width: 181px;
            height: 63px;
            border: 1px solid #FF781D;
            background-color: #FF781D;
            border-radius: 16px;
            cursor: pointer;

            &:hover {
              color: #FF781D;
              background-color: unset;
            }
          }
        }

        .right {
          position: relative;

          .toolDoge {
            position: relative;
            width: 358px;
            height: 509px;
            z-index: 10;
          }

          .toolDogeBg {
            position: absolute;
            width: 665px;
            height: 688px;
            top: 36px;
            left: 128px;
            z-index: 1;
          }
        }
      }
    }

    .toolsBox {
      width: 100vw;
      padding-top: 190px;

      .container {
        width: 1020px;
        margin: 0 auto;
        padding: 52px;
        background: #1D2026;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
        border-radius: 42px;

        .title {
          font-family: 'Arial';
          font-size: 24px;
          color: #FFFFFF;
        }

        .contentBox {
          display: flex;
          margin-top: 32px;

          .selectBox {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin-right: 38px;

            .network, .notifier {
              font-family: 'Arial';
              font-size: 20px;
              color: #DADADA;
              display: flex;
              align-items: center;
              cursor: pointer;

              &.ac {
                color: #FFFFFF;
              }
            }

            .networkImg {
              width: 65px;
              height: 89px;
              margin-right: 27px;
            }

            .notifierImg {
              width: 70px;
              height: 52px;
              margin-right: 22px;
            }
          }

          .line {
            margin-right: 52px;
          }

          .showBox {
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .title {
              font-family: 'Arial';
              font-size: 32px;
              color: #DADADA;
            }

            .context {
              width: 446px;
              font-family: 'Arial';
              font-size: 16px;
              color: #595959;
            }

            .learnM {
              font-family: 'Arial';
              font-size: 16px;
              color: #595959;
              cursor: pointer;

              &:hover {
                color: #DADADA;
              }
            }
          }
        }
      }
    }

    .whyBox {
      width: 100vw;
      padding-top: 190px;

      .container {
        width: 1020px;
        height: 1280px;
        border: 3px solid #DADADA;
        border-radius: 42px;
        margin: 0 auto;
        padding: 0 32px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        position: relative;

        .title {
          width: 266px;
          position: absolute;
          top: -20px;
          left: 50px;
          font-family: 'Arial';
          font-size: 24px;
          color: #FFFFFF;
          background-color: #181A1F;
          text-align: center;
        }

        .contentBox {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .subTitle {
            width: 494px;
            font-family: 'CAI978-606';
            font-size: 32px;
            line-height: 34px;
            color: #FFFFFF;
            margin-bottom: 12px;
          }

          .context {
            width: 494px;
            font-family: 'Arial';
            font-size: 20px;
            line-height: 23px;
            color: #595959;
          }

          .why1 {
            width: 379px;
            height: 230px;
          }
          .why2 {
            width: 385px;
            height: 349px;
          }
          .why1 {
            width: 454px;
            height: 307px;
          }
        }
      }
    }

    .communityBox {
      width: 100vw;
      margin-top: 100px;
      background: #1D2026;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);

      .container {
        width: 1020px;
        margin: 0 auto;
        display: flex;
        padding: 22px 0;

        .left {
          display: flex;
          flex-direction: column;
          justify-content: center;

          .title {
            font-family: 'Arial';
            font-size: 24px;
            color: #FFFFFF;
            margin-bottom: 30px;
          }

          .context {
            font-family: 'Arial';
            font-size: 20px;
            color: #595959;
            margin-bottom: 24px;
          }

          .joinBtn {
            width: 112px;
            height: 29px;
            border: 1px solid #FFFFFF;
            border-radius: 9px;
            font-family: 'Arial';
            font-size: 16px;
            line-height: 29px;
            text-align: center;
            color: #FFFFFF;
            cursor: pointer;
          }
        }

        .right {
          img {
            width: 395px;
            height: 381px;
          }
        }
      }
    }

    .teamBox {
      width: 100vw;
      margin: 100px 0 100px 0;

      .container {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
          font-family: 'CAI978-606';
          font-size: 32px;
          color: #FFFFFF;
          margin-bottom: 60px;
        }

        .memberBox {
          display: flex;

          .member {
            width: 180px;
            height: 65px;
            background: rgba(217, 217, 217, 0.22);
            border-radius: 9px;
            margin: 0 12px;
          }
        }
      }
    }

    .memberCarouselBox {
      width: 100vw;

      .container {
        width: 1020px;
        margin: 0 auto;
        border: 3px solid #DADADA;
        border-radius: 42px;
        position: relative;

        &:hover {
          .arrowBox {
            display: flex;
          }
        }

        .arrowBox {
          width: 100%;
          padding: 0 36px;
          position: absolute;
          top: 226px;
          justify-content: space-between;
          z-index: 10;
          display: none;

          .arrowBtn {
            cursor: pointer;
          }
        }

        .ivu-carousel {
          .ivu-carousel-arrow {
            display: none;
          }

          .ivu-carousel-list {
            .ivu-carousel-track {
              .ivu-carousel-item {
                .carouselContent {
                  width: 100%;
                  height: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;

                  .left {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-right: 86px;

                    .avatar {
                      width: 153px;
                      height: 153px;
                      border-radius: 50%;
                      background: #D9D9D9;
                      margin-bottom: 24px;
                    }

                    .title {
                      font-family: 'Arial';
                      font-size: 20px;
                      color: #DADADA;
                    }
                  }

                  .right {
                    width: 441px;
                    display: flex;
                    align-items: center;
                  }
                }
              }
            }
          }

          .ivu-carousel-dots {
            display: none;
          }
        }
      }
    }

    .footBox {
      width: 100vw;
      display: flex;
      justify-content: center;
      padding: 62px 0;
      margin-top: 48px;

      .box {
        display: flex;
        align-items: center;
        margin: 0 64px;

        .title {
          font-family: 'Arial';
          font-size: 16px;
          color: #DADADA;
          margin-right: 12px;
        }

        .cangshan {
          width: 144px;
          height: 51px;
        }

        .ant {
          width: 34px;
          height: 34px;
        }

        .antName {
          height: 19px;
          margin-left: 6px;
        }
      }
    }
  }
</style>