<template>
<div>
  <p>К сожалению связь с сервером временно отсутствует. Попробуйте зайти позже.</p>
</div>
</template>

<script>
export default {
name: "ErrorMessage"
}
</script>

<style lang="scss" scoped>

div {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(10, 10, 10, 0.9);


}

p {
  margin: 50vh 0;
  color: white;
  text-align: center;
  font-size: 28px;
}


</style>
