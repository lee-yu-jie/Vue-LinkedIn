<template>
  <div class="header">
    <div class="container">
      <div class="logo" > 
        <h1><a href="/"><img src='@/assets/header/logo.png' alt="logo"></a></h1>
      </div>
      <nav>
        <ul>
          <li >
            <font-awesome-icon class="icon" icon="fa-solid fa-rss" />
            <p>FEED</p>
          </li>
          <li >
            <font-awesome-icon class="icon" icon="fa-solid fa-user" />
            <p>NETWORK</p>
          </li>
          <li >
            <font-awesome-icon class="icon" icon="fa-solid fa-briefcase" />
            <p>JOBS</p>
          </li>
          <li >
            <font-awesome-icon class="icon" icon="fa-solid fa-comments" />
            <p>CHAT</p>
          </li>
          <li >
            <font-awesome-icon class="icon" icon="fa-solid fa-bell" />
            <p>NOTICES</p>
          </li>
        </ul>
      </nav>
      <div class="search">
        <font-awesome-icon class='icon' icon="fa-solid fa-magnifying-glass" />
        <input type="text" placeholder="請輸入關鍵字">
      </div>
      <div class="user">
        <div class="user-img">
          <img src="@/assets/header/user.jpg" alt="userImg">
        </div>
        <div class="info"> 
          <pre class="name">D.KARGAEV  <span>YOU</span></pre>
          <pre class="visitor">367 views today  <span>+32↗</span></pre> 
        </div>
      </div>
      <div class="other">
        <font-awesome-icon class='icon' icon="fa-solid fa-map-pin" />
        <p>OTHER</p>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import '~@/assets/css/variables.scss';
  .header{
    box-shadow: 0 0 30px  rgb(185, 185, 185);
    font-size: .8em;
    .container{
    max-width: 1200px;
    margin: auto;
    display: flex;
    height: 80px;
    .logo{
      width: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: $border-gray;
      border-left: $border-gray;
      img{
      width: 50px;
      height: 50px;
      }
      }
      nav{

        width: 40%;
        border-right: $border-gray;
        ul{
          display: flex;
          align-items: center;
          height: 100%;
          li{
            position: relative;
            text-align: center;
            width: 20%;
            .icon{
            width: 25px;
            height: 25px;
            margin-bottom: 5px;
            }
            &::after {
              content: "";
              display: block;
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              bottom: -17px;
              width: 0%;
              height: 2px;  
              background: $primary-color;
              transition: .3s linear all;
            }
            &:hover, &.active {
              &::after {
                width: 100%;
              }
              p, .icon {
                color: $primary-color;
              }
            }
          }
        }
      }
      .search{
        width: 20%;
        display: flex;
        align-items: center;
        margin: 0 10px;
        padding: 0 10px;
        border-right: $border-gray;
        .icon{
          width: 20px;
          height: 20px;
          margin-right: 5px;
        };
        input{
          flex-grow: 1;
          height: 30px;
          border:none;
          outline: none;
          font-size: 1.2em;
        }
      }
      .user{
        width: 30%;
        display: flex;
        align-items: center;
        border-right: $border-gray;
        .user-img{
          margin: 0 10px;
          img{
          width: 60px;
          height: 60px;
          border-radius: 100%;
          }
        }
        .info{
          .name{
            margin-bottom: 10px;
            span{
              color:rgb(169, 169, 169)
            }
          }
          .visitor{
            color: gray;
            span{
              color: green
            };
          }
        }
      }
      .other{
        width: 10%;
        border-right: $border-gray;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .icon{
            width: 25px;
            height: 25px;
            margin-bottom: 5px;
        }
      }
    }
  }
</style>