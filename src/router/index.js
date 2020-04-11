import Vue from 'vue'
import Router from 'vue-router'
import Author from '@/components/Author'
import Affiliation from '@/components/Affiliation'
import Field from '@/components/Field'
import Conference from '@/components/Conference'
import FieldRanking from '@/components/FieldRanking.vue'
import AffiliationRanking from '@/components/AffiliationRanking'
import Home from '@/components/Home'
import ArticleSearch from "../components/ArticleSearch";
import AuthorSearch from "@/components/AuthorSearch";
import Article from "@/components/Article";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/authors/info/:id',
      name: 'AuthorInfo',
      component: Author
    },
    {
      path: '/affiliations/info/:id',
      name: 'AffiliationInfo',
      component: Affiliation
    },
    {
      path: '/fields/info/:id',
      name: 'FieldInfo',
      component: Field
    },
    {
      path: '/conferences/info/:id',
      name: 'ConferenceInfo',
      component: Conference
    },
    {
      path: '/fields/rank',
      name: 'FieldRanking',
      component: FieldRanking
    },
    {
      path: '/affiliations/rank',
      name: 'AffiliationRanking',
      component: AffiliationRanking
    },
    {
      path: '/articles/findArticles',
      name: 'ArticleSearch',
      component: ArticleSearch
    },
    {
      path: '/authors/findAuthors',
      name: 'AuthorSearch',
      component: AuthorSearch
    },
    {
      path: '/articles/info/:type/:id',
      name: 'ArticleInfo',
      component: Article
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
