<template>
  <footer>
    <div class="container">
      <div class="logo">
        <img src="@/assets/header/logo.png" alt="logo">
        <p>Linked<span>In</span></p>
      </div>
      <div class="footer-nav">
        <h2>Navigation</h2>
        <div class="nav-box">
          <div class="nav-item">
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>adverting</li>
              <li>Smell Business</li>
            </ul>
          </div>
          <div class="nav-item">
            <ul>
              <li>Talent Solutions</li>
              <li>Marketing Solutions</li>
              <li>Sales Solutions</li>
              <li>Safery Center</li>
            </ul>
          </div>
          <div class="nav-item">
            <ul>
              <li>Community Guidelines</li>
              <li>Privacy & Terms</li>
              <li>Mobile App</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="help">
        <h2>Fast access</h2>
        <a class="questions" href="#"><span>QUESTIONS?</span><font-awesome-icon icon="fa-solid fa-circle-question" /></a>
        <a class="settings" href="#"><span>SETTINGS</span><font-awesome-icon icon="fa-solid fa-gear" /></a>
      </div>
      <div class="lang">
        <h2>Language</h2>
        <select name="" id="">
          <option value="ENGLISH">ENGLISH</option>
          <option value="JAPANESE">JAPANESE</option>
          <option value="TAIWANESE">TAIWANESE</option>
        </select>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  @import '@/assets/css/variables.scss';
  
  footer{
    background: rgb(243, 243, 243);
    .container{
      padding: 50px 20px;
      max-width: 1100px;
      margin: auto;
      display: flex;
      h2{
        margin-bottom: 20px;
        font-weight: 600;
        }
      .logo{
        width: 5%;
        margin-right: 60px;
        img{
          width: 50px;
          height: 50px;
        }
        span{
          color: $primary-color
        }
      }
      .footer-nav{
        width: 55%;
        margin-right: 60px;
        .nav-box{
          display: flex;
          justify-content: space-between;
          li{
            margin-bottom: 10px;
          }
        }
      }
      .help{
        width: 20%;
        display: flex;
        flex-direction: column;
        margin-right: 60px;
        a{
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          padding:5px 10px;
          border-radius: 10px;
        }
        a:nth-of-type(1){
          background: $primary-color;
          color: white;;
        }
        a:nth-of-type(2){
          border: 1px solid $primary-color;
          color: $primary-color;
        }
      }
      .lang{
        width: 20%;
        select{
          width: 100%;
          border: none;
          padding: 5px 10px;
          border-radius: 10px;
        }
      }
    }
  }
</style>