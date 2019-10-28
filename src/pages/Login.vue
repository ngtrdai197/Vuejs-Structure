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
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login(event) {
      event.preventDefault();
      const user = { username: this.username, password: this.password };
      this.$store.dispatch("AuthModule/LOGIN", user);
    }
  }
};
</script>