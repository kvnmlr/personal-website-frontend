export default {
  computed: {
    filteredPosts: function () {
      return this.posts.filter((post) => {
        return (post.title.toUpperCase().match(this.search.toUpperCase())
          || post.body.toUpperCase().match(this.search.toUpperCase()));
      })
    }
  },
}
