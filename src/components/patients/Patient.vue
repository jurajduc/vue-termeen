<template>
  <div class="patient-item">
    <!-- <div class="image-wrapper">
      <img src="https://pbs.twimg.com/profile_images/965934931389149184/yBrw1N23_400x400.jpg" class="team-member-avatar" />
    </div> -->
    <div class="patient-name">
           {{patient.firstName}} {{patient.lastName}}
    </div>
    <div class="patient-details">
      <div>
        <div>{{patient.phone}}</div>
        <div>{{patient.email}}</div>
      </div>
      <div>
        <div>{{patient.address}}, {{patient.city}}</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Patient',
  props: ["patient"],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .patient-item {
    display: block;
    width: 100%;
    text-align: left;
    padding: 10px;
    border-bottom: 1px solid #efefef;
  }

  .patient-name{
    font-size: 120%;
    font-weight: bold;
  }

</style>
