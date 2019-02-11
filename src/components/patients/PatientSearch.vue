<template>
  <div class="patient-search">
    <form>
      <input type="text" class="search-field" />
    </form>

  </div>
</template>

<script>
export default {
  name: 'PatientSearch',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.search-field{
  border: 1px solid #efefef;
  padding: 5px;
}

</style>
