<template>
  <b-container>
    <b-form-group id="file-input">
      <b-row>
        <b-col cols="9">
          <b-form-file id="files" multiple ref="files" type="file" v-model="files"
                       v-on:change="handleFileUpload()"/>
        </b-col>
        <b-col class="btnSm" cols="3">
          <b-button v-on:click="submitFile()" variant="outline-primary">Submit!</b-button>
        </b-col>
      </b-row>
    </b-form-group>
  </b-container>
</template>
<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class FileUpload extends Vue {
    files: string = ''
    handleFileUpload() {

    }

    submitFile() {

    }
  }
</script>

<style scoped>

</style>