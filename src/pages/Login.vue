<template>
  <div class="container">
    <div class="row">
      <div class="col-10">
        <form @submit="login($event)">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter username" v-model="username" />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Enter password"
              v-model="password"
            />
          </div>
          <div class="form-group">
            <input type="submit" class="form-control" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { CONSTANTS } from "../constants";
import { LOGIN, GET_TOKEN } from "../@store/actions";
import { mapGetters } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters(CONSTANTS.MODULE.AUTH, { accessToken: GET_TOKEN })
  },
  methods: {
    async login(event) {
      event.preventDefault();
      await this.$store.dispatch(`${CONSTANTS.MODULE.AUTH}/${LOGIN}`, {
        username: this.username,
        password: this.password
      });
      if (this.accessToken) {
        this.$router.push({ name: "home" });
      }
    }
  }
};
</script>