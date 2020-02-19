<template>
<div id="transContainer">
  <form v-on:submit="formSubmit">
    <input type="text" placeholder="请输入你要翻译的字词" v-model="inputWords">
    <select v-model="language">
      <option value="en">English</option>
      <option value="zh">中文</option>
      <option value="ja">日文</option>
      <option value="ko">韩文</option>
      <option value="fr">法文</option>
    </select>
    <input type="submit" value="翻译"> 
  </form>
</div>
  
</template>

<script>
export default {
  name: 'transContainer',
  data(){
    return{
      inputWords:'',
      language:''
    }
  },
  methods:{
    formSubmit(e){
      this.$emit('submitEvent',this.inputWords,this.language);
      e.preventDefault();
    }
  },
  mounted(){
    this.language = 'en';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
