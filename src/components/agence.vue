<template>
  <div class="top1">
    <p>
      <span>****</span> agence web spécialisée dans le domaine du développement
      des applications WEB, mobiles, référencement et solutions
      <span>OPEN SOURCE</span>.
    </p>
  </div>
</template>
<script>
export default {
  name: "agence"
};
</script>
<style scoped>
.top1 {
  width: 100%;
  margin-top: 30px;
  padding: 16px 30px;
  color: #fff;
  background-color: #262522;
}
.top1 p span:first-child {
  animation: fff 3s infinite;
}
.top1 p span:last-child {
  padding-bottom: 6px;
  border-bottom: #999 solid 2px;
}
@keyframes fff {
  0% {
    color: #ee3958;
  }
  50% {
    color: #999;
  }
  100% {
    color: #42a5f5;
  }
}
</style>
