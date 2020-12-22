<script>
  import Profile from '../modules/Profile'

  export default {
    components: {
      Profile
    },
    methods: {
      window:onload = function() {
        if(location.href.match("/about") != null) {
          document.querySelector('.profileArea').classList.add('block')
        }
      }
    }
  }
</script>

<template>
  <main>
    <Profile/>
    <div class="aboutArea">
      <div class="innerBlock">
        <div class="history">
          <p>こんにちは。スギモトです。</p>
          <p>1996年生まれの神奈川県出身です。</p>
          <p>専門学校でWeb制作を学び、現在の会社に2017年に新卒で入社しました。</p>
          <p>今はフロントエンドエンジニア兼プロジェクトリーダーとして25名ほどのチームの管理や<br>
          マネジメント、社内のインフラ開発に携わっています。</p>
        </div>
        <div class="skill">
          <ul>
            <li class="title">スキル</li>
            <li>HTML / CSS / SCSS / JavaScript / jQuery / Vue.js / Node.js /</li>
            <li>PHP / WordPress / Photoshop / Illustrator / XD / Zeplin / UI Design /</li>
          </ul>
          <ul>
            <li class="title">資格</li>
            <li>Webクリエイター能力認定試験 スタンダード（2015年 9月）</li>
            <li>ウェブデザイン技能検定 / 3級ウェブデザイン技能士（2016年 4月）</li>
            <li>普通自動車免許（2017年 8月）</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>