<template>
  <section>
    <h3>Posts</h3>
    <v-data-table :headers="this.columns" :items="this.posts" :rows-per-page-items=[10,50,100,200]>
      <template slot="headerCell" slot-scope="props">
        <v-tooltip bottom>
              <span slot="activator">
                {{ props.header.text }}
              </span>
          <span>
                {{ props.header.text }}
              </span>
        </v-tooltip>
      </template>
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">
          <router-link :to="{path: '/posts/' + props.item._id}">{{ props.item.title }}</router-link>
        </td>
        <td class="text-xs-left">
          <router-link v-if="props.item.user" :to="{path: '/users/' + props.item.user._id}">{{ props.item.user.username }}</router-link>
        </td>
        <td class="text-xs-left">{{ formatDate(props.item.createdAt, true) }}</td>
      </template>
    </v-data-table>
    <div class="separator"></div>
  </section>
</template>

<script>
  import {EventBus} from '@/eventBus.js'
  import formatDateMixin from '../../../mixins/formatDateMixin'

  export default {
    name: 'Posts',
    props: {
      posts: Array,
    },
    data () {
      return {
        currentTab: 'tab-api',
        columns: [
          {
            text: 'Title',
            value: 'title',
          },
          {
            text: 'User',
            value: 'user',
          },
          {
            text: 'Created',
            value: 'cratedAt',
          },
        ],
      }
    },
    mixins: [formatDateMixin]
  }
</script>

<style scoped>

</style>
