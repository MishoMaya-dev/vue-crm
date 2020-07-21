import _ from 'lodash'

export default {
  data() {
    return {
      page: +this.$route.query.page || 1,
      pageSize: 5,
      pageCount: 0,
      allItem: [],
      items: [],
    }
  },
  methods: {
    pageChangeHandler(page) {
      this.$router.push(`${this.$route.path}?page=${page}`);
      this.items = this.allItem[page - 1] || this.allItem[0]

    },
    setupPagination(allItems) {
      this.allItem = _.chunk(allItems, this.pageSize);
      this.pageCount = _.size(this.allItem);
      this.items = this.allItem[this.page - 1] || this.allItem[0]
    }
  }
}
