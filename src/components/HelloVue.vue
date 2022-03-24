<template>
  <div class="helloVue">
    <h1>テンプレート構文</h1>
    <button v-on:click = "alertClick">Click me</button>

    <!-- v-bindは属性値をVueのdataプロパティで書き換えることができる -->
    <!-- さまざまな属性値をVueで制御する際に使用 -->
    <h2>v-bind</h2>
    <h2>{{ inputValBind }}</h2>
    <div>
      <!-- v-bind:{値を書き換えたい属性値} -->
      <!-- 属性値をプロパティ値で固定する vueで書いたもののみ反映され、htmlで書いたものは反映されない 属性値を指定できるのでいろんなところで使える -->
      <input type="text" v-bind:value = "inputValBind">

      <!-- v-model：フォーム入力値をVueのdataプロパティと紐づける -->
      <!-- 入力値をプロパティ値に保存する htmlで書いたものも反映される -->
      <h2>v-model</h2>
      <h2>{{ inputValModel }}</h2>
      <input type="text" v-model = "inputValModel">
    </div>

    <!-- v-if, v-else-if, v-elseの使い方 -->
    <!-- 初めからDOM生成はされていない -->
    <div v-if="inputValModel === '寺田'">寺田です</div>
    <div v-else-if="inputValModel === '山田'">山田です</div>
    <div v-else>その他</div>
    <!-- 初めからDOM生成をしておきたいときはv-showを使う -->
    <!-- display: none; で非表示化されている -->
    <div v-show="inputValModel === '寺田'">寺田です</div>

  <template v-if="inputValModel === '寺田'">
    <div>入力値は</div>
    <div>寺田です</div>
  </template>

  <h2>v-for</h2>
  <ul>
    <li v-for="(music, id) in musicList" :key="music.id" style="list-style-type: none;">
      <span>No.{{ id + 1 }} : {{ music.genre }} : {{ music.title }}</span>
    </li>
  </ul>

<!-- {{  }} 文字列として表示される -->
<!-- v-html タグとして表示させることができる -->
  <h2>v-html</h2>
  <div>{{ hpLink }}</div>
  <div v-html="hpLink"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloVue',
  data: function() {
    return {
      inputValBind: '入力してください',
      inputValModel: '入力してください',
      musicList: [
        {genre: 'J-Pop', title: 'Love Song'},
        {genre: 'J-Pop', title: 'Vue.js song'},
        {genre: 'K-Pop', title: 'DNA'},
      ],
      hpLink: '<a href="https://google.com">Google</a>',
    }
  },
  methods: {
    alertClick: function() {
      alert('Click me')
    },
  }
}
</script>
