<template>
  <div class="team-member-item">
    <div class="image-wrapper">
      <img src="https://pbs.twimg.com/profile_images/965934931389149184/yBrw1N23_400x400.jpg" class="team-member-avatar" />
    </div>
    <div class="name-wrapper">
           Dr. Manfred Von Richthofen
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamMember',
  props: [],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .team-member-item {
    background: white;
    display: inline-block;
    padding:10px;
    margin:10px;
    border-radius:4px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    z-index: 4;
    position: relative;
  }

  .image-wrapper{
    display:inline-block;
    margin-right: 10px;

  }

  .name-wrapper{
    display:inline-block;
    width: 150px
  }

  .team-member-avatar{
    width: 40px;
    height: 40px;
    border-radius: 100px;
  }

</style>
