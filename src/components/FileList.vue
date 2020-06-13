<template>
  <b-container>
    <b-img :src="imgRaw" v-if="imgRaw" width="100%"></b-img>
    <p v-else>{{this.curFile}}</p>
    <b-list-group v-if="fileList && fileList.length">
      <div class="list-header">
        <span>Current File List</span>
        <span class="float-right">Number of files : {{fileList.length}}</span>
      </div>
      <b-list-group-item
          v-bind:data="fileItem.fileName"
          v-bind:key="fileItem.fileNameKey" v-for="fileItem of fileList">
        <b-row>
          <b-col class="align-self-center" cols="8">
            <b-icon-music-note-beamed
                v-if="fileItem.mimeType.includes('audio')"></b-icon-music-note-beamed>
            <b-icon-card-image v-else-if="fileItem.mimeType.includes('image')"></b-icon-card-image>
            <b-icon-file-earmark v-else></b-icon-file-earmark>
            {{fileItem.fileName}}
          </b-col>
          <b-col class="btnCol" cols="2">
            <b-button class="float-right" v-on:click="deleteFile(fileItem)"
                      variant="outline-danger">Del
            </b-button>
          </b-col>
          <b-col class="btnCol" cols="2">
            <b-button class="float-right" v-on:click="downloadFile(fileItem)"
                      variant="outline-primary">View
            </b-button>
          </b-col>
        </b-row>
      </b-list-group-item>
    </b-list-group>
  </b-container>
</template>
<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'

  @Component({
    props: {
      files: String
    },
    created() {
      console.log('created')
    }
  })
  export default class FileList extends Vue {
    imgRaw: string = 'test'
    curFile: string = 'test'
    fileList: string = 'test'

    initFunc() {
      let vm = this
      vm.$http.get('/api/getAllFiles').then(
          response => {
            vm.fileList = response.data
          }
      ).catch(error => {
        console.log('Get File List Fail' + error)
      })
    }

    downloadFile() {
      console.log('download File clicked')
    }

    deleteFile() {
      console.log('download File clicked')
      this.initFunc()
    }
  }
</script>

<style scoped>

</style>