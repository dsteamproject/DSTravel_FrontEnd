<template>
  <div>
    <div class="wrap">
      <div>dsa</div>
      <ul>
       
        <li v-for="item in data" :key="item" v-show="item.content !== null" >
          제목 : {{item.title}}
          내용 : {{item.content}}
          작성자 : {{item.wirter}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>


  export default {
    
    data() {
      return {
        data:[
          {title:"asd" , content: null , wirter: "111"},
          {title:"asd" , content: "123" , wirter: "111"},
          {title:"asd" , content: "123" , wirter: "111"},
          {title:"asd" , content: null , wirter: "111"}
        ]
      }
    },
    methods: {
  
    }
  }
</script>