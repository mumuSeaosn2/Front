<template>
  <div class="loginpanel">
    <div class = "reg">
    <h1> Sign Up </h1>
    <div class="txt">
      <h3>First Name</h3>
      <input id="firstname" type="text" placeholder="First Name" />
    </div>
    <div class="txt">
      <h3>Last Name</h3>
      <input id="lastname" type="text" placeholder="Last Name" />
    </div>
    <div class="txt">
      <h3>Email</h3>
      <input id="email" type="text" placeholder="Email" />
    </div>
    <div class="txt">
      <h3>Password</h3>
      <input id="password"  type="text" placeholder="Password" />
    </div>
    <div class="txt">
      <h3>Confirm Password</h3>
      <input id="confirmpassword"  type="text" placeholder="Confirm Password" />
    </div>
    <div class="buttons">
      <input type="button" value="Register"/>
    </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default{
  name: 'RegisterView',
  components: {
  },
}
</script>