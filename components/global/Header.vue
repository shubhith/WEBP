<template>
  <div class="Header">
    <div class="Header-section-left">Honey Thakuria</div>

    <div class="Header-section-right">
      <div>Blogs</div>
      <div>Projects</div>
      <div>Contact</div>
    </div>
  </div>
</template>


<style scoped>

.Header{
    display:flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 20px;
    background-color:rgb(247, 251, 251);
    height: 60px;
}
.Header-section-right{
    display: Flex;
    flex-flow: row wrap;
    justify-content: space-between;
}
.Header-section-right div:nth-child(1),.Header-section-right div:nth-child(2){
   margin-right:10px; 
}

.Header-section-right div:hover, .Header-section-left:hover{
    cursor:pointer;
    color:blue;
}


</style>


<script>
export default {
    name:"Header"
};
</script>


