<template>
  <div>
    <Header></Header>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "../components/Header";
import { GET_ALL_USERS, GET_USER } from "../@store/actions";
import { CONSTANTS } from "../constants";

export default {
  name: "Home",
  components: {
    Header
  },
  props: {
    pageName: String
  },
  computed: {
    ...mapGetters(`${CONSTANTS.MODULE.USER}`, { users: GET_ALL_USERS })
  },
  created() {
    this.$store.dispatch(`${CONSTANTS.MODULE.USER}/${GET_ALL_USERS}`);
    this.$store.dispatch(`${CONSTANTS.MODULE.USER}/${GET_USER}`);
  },
  methods: {
    append() {
      this.users.push({ username: "nguyenvantoan", password: "Aloalo123" });
    }
  }
};
</script>