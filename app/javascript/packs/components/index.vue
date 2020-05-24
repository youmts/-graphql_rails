<template>
  <div>
    <ul v-for="post in allPosts">
      <li>タイトル: {{ post.title }}</li>
      <li>内容: {{ post.content }}</li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const POSTS_QUERY = gql`
query allPosts {
  allPosts {
    title
    content
  }
}`

export default {
  name: 'index',
  data() {
    return {
      allPosts: []
    }
  },
  apollo: {
    allPosts: {
      query: POSTS_QUERY
    }
  }
}
</script>