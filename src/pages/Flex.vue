<template>
  <q-page>
    <div class="row q-mb-md">
      <div class="col bg-primary"></div>
      <div class="col bg-positive"></div>
      <div class="col bg-negative"></div>
    </div>

    <div class="row q-mb-md">
      <div class="col bg-primary"></div>
      <div class="col col-5 bg-positive"></div>
      <div class="col col-6 bg-negative"></div>
    </div>

    <div class="row q-mb-md justify-center">
      <div class="col col-4 bg-primary"></div>
      <div class="col col-4 bg-positive"></div>
    </div>

    <div class="row q-mb-md justify-start">
      <div class="col col-4 bg-negative"></div>
      <div class="col col-4 bg-positive"></div>
    </div>

    <div class="row q-mb-md justify-between">
      <div class="col col-4 bg-primary"></div>
      <div class="col col-4 bg-negative"></div>
    </div>

    <q-separator spaced />

    <div class="row q-mb-md justify-between">
      <div class="col-12 col-sm-6 col-md-4 bg-primary"></div>
      <div class="col-12 col-sm-6 col-md-4 bg-negative"></div>
    </div> 
    
    <q-separator spaced />

    <div class="row q-mb-md">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-positive"></div>
      <div class="square-box bg-negative"></div>
    </div>

    <div class="row q-mb-md justify-between">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-positive"></div>
      <div class="square-box bg-negative"></div>
    </div>

    <div class="row q-mb-md justify-end">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-positive"></div>
      <div class="square-box bg-negative"></div>
    </div>

    <div class="row q-mb-md justify-around">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-positive"></div>
      <div class="square-box bg-negative"></div>
    </div>

    <div class="column q-mb-md items-center bg-dark">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-positive"></div>
      <div class="square-box bg-negative"></div>
    </div>

    <div class="column q-mb-md items-end bg-dark">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-positive"></div>
      <div class="square-box bg-negative"></div>
    </div>

    <div class="column custom-height q-mb-md items-center justify-center bg-dark">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-positive"></div>
      <div class="square-box bg-negative"></div>
    </div>

    <div class="column custom-height q-mb-md items-center justify-between bg-dark">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-positive"></div>
      <div class="square-box bg-negative"></div>
    </div>

    <div class="column custom-height q-mb-md items-center justify-between bg-dark">
      <div class="square-box bg-primary"></div>
      <div class="square-box self-end bg-positive"></div>
      <div class="square-box self-start bg-negative"></div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Flex'
})
</script>

<style scoped>
.col, .col-4, .col-6, .col-12 {
  height: 50px;
}

.square-box {
  width: 50px;
  height: 50px;
}

.custom-height {
  height: 300px;
}
</style>
