<template>
  <div id="app">
    <h1>在线翻译</h1>
    <p class="text-muted">注意：能把任意语言翻译成其他语言</p>
    <transContainer v-on:submitEvent="solveData"></transContainer>
    <transOutput :textword="result"></transOutput>
  </div>
</template>

<script>
import TransContainer from './components/TransContainer'
import TransOutput from './components/TransOutput'

export default {
  name: 'App',
  components:{
    TransContainer,
    TransOutput
  },
  data(){
    return {
      result:''
    }
  },
  methods:{
    solveData(text,language){
      if(text!==''){
        // alert(text);
        this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170721T082515Z.54cf3dc583f679db.f4a96182281281d8b5dfe24b4e88298e2133f219&lang='+language+'&text='+text)
                  .then((response)=>{
                    this.result = response.body.text[0];
                    // console.log(this.result);
                  })
      }else{
        this.result = '';
        window.location.reload();
      }
      
    }
  }
}
</script>

<style>
  #app{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
  }
</style>
