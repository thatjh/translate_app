<template>
<div id="transContainer">
  <form v-on:submit="formSubmit">
    <input type="text" placeholder="请输入你要翻译的字词" v-model="inputWords">
    <select v-model="language">
      <option value="en">English</option>
      <option value="zh">中文</option>
      <option value="ko">韩文</option>
      <option value="fr">法文</option>
    </select>
    <input type="submit" value="翻译">
    <input type="button" :class="{autoText:isAutoTranslate}" :value="autoText" v-on:click="autoTranslate"> 
  </form>
</div>
  
</template>

<script>
let timer,lastTime;
export default {
  name: 'transContainer',
  data(){
    return{
      inputWords:'',
      language:'',
      isAutoTranslate:false,
      autoText:''
    }
  },
  methods:{
    formSubmit(e){
      // 节流
      let nowTime = new Date();
      if(lastTime-nowTime < 1000){
        clearTimeout(timer);
      }
      timer = setTimeout(()=>{
        this.$emit('submitEvent',this.inputWords,this.language);
        console.log(this.inputWords,this.language); 
        e.preventDefault();
        lastTime = new Date();
      },1000);
      
    },
    autoTranslate(){
      // console.log('click success');
      this.isAutoTranslate = !this.isAutoTranslate;
      if (this.isAutoTranslate) this.autoText = '切换至手动翻译'
      else this.autoText = '切换至自动翻译'
    }
  },
  mounted(){
    this.language = 'en';
    this.autoText = '切换至自动翻译'
  },
  watch:{
    inputWords(){
      if(this.isAutoTranslate){
        console.log('input is updating!' );
        console.log(this.inputWords,this.language);
        this.$emit('submitEvent',this.inputWords,this.language);
      }
      
    },
    language(){
      if(this.isAutoTranslate){
        console.log('select option is updating!' );
        console.log(this.inputWords,this.language);
        this.$emit('submitEvent',this.inputWords,this.language);
      }
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .autoText{
    background:#EBEBEB;
  }
</style>
