<template>
  <div>
      
    <button @click="showSingle">Show single picture.</button>
    <button @click="showMultiple">Show a group of pictures.</button>

    <!-- all props & events -->
    <vue-easy-lightbox
      scrollDisabled
      escDisabled
      moveDisabled
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script>
  // If VueApp is already registered with VueEasyLightbox, there is no need to register it here.
  import VueEasyLightbox from 'vue-easy-lightbox'

  export default {
    components: {
      VueEasyLightbox
    },
    data() {
      return {
        imgs: '', // Img Url , string or Array of string
        visible: false,
        index: 0 // default: 0
      }
    },
    methods: {
      showSingle() {
        this.imgs ="/img/seoul1.f2d4e6e5.jpg",
     
        this.show()
      },
      showMultiple() {
        this.imgs = [
          "/img/seoul1.f2d4e6e5.jpg",
          "/img/seoul1.f2d4e6e5.jpg"
        ]
        // or
       
        // allow mixing

        this.index = 1 // index of imgList
        this.show()
      },
      show() {
        this.visible = true
      },
      handleHide() {
        this.visible = false
      }
    }
  }
</script>