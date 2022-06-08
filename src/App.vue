<template>
  <v-app id="inspire">
    
    <app-bar :links="links"></app-bar>
    <app-modal v-model="modal">
      <comment-form 
        :show="modal"
        label="Comment to Post"
        @comment="comment"></comment-form>
    </app-modal>
    <app-main>
      <v-card flat class="d-flex justify-space-between">
        <!-- static post here -->
        <comment
          username="Jerome Matias"
          @show-modal="showModal"
          :response-length="comments.length"
          :response="[]"
          comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type andscrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."></comment>      
      </v-card>
      <v-row justify="end">
        <v-col cols="10">
          <!-- Dynamic Comment to Post -->
          <comment 
            v-for="(comment, i) in comments"
            @show-modal="showModal"            
            :id="comment.id"
            :responses="comment.responses"
            :username="comment.name"
            :comment="comment.comment"
            :key="i"></comment>
        </v-col>
      </v-row>
    </app-main>
  </v-app>
</template>
<style lang="scss">
  .comment, .response {
    font-size: 12px;
  }
</style>
<script>
  import { CommentService } from './services/comment'
  import AppBar from './components/AppBar.vue'
  import AppMain from './components/AppMain.vue'
  import Comment from './components/Comment.vue'
  import AppModal from './components/AppModal.vue'
  import CommentForm from './components/CommentForm.vue'
  // import Replies from './components/Replies.vue'
  export default {
    name: 'App',
    components: {
      AppBar,
      AppMain,
      Comment,
      AppModal,
      CommentForm,
      // Replies        
    },
    data: () => ({
      modal: false,
      replied_comment_id: null,
      comments: [],
      links: [                        
        'Newsfeed',    
      ],
    }),
    mounted() {
      this.all()
    },
    methods: {
      showModal({show = true, id}) {
        this.modal = show
        this.replied_comment_id = id                
      },
      closeModal() {
        this.modal = false
      },
      comment(comment) {            
        let data;
        if(this.replied_comment_id) {
          data = { ...comment, replied_comment_id: this.replied_comment_id }
        } else {
          data = comment
        }        

        CommentService.create(data).then(response => {
          if(!this.replied_comment_id) {
            this.comments.push(response.data)
          } else {
            this.filterComment(this.replied_comment_id, response.data)
          }
          this.closeModal()
        })
      },
      filterComment(id, response) {
        this.comments.find(comment => comment.id == id).responses.push(response)
      },
      all() {
        CommentService.all().then(response => {
          this.comments = response.data
        })
      }
    }
  }
</script>