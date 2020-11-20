<template>
  <div>
    I am a child component used for teleportation
  </div>
  <div>Items Count: {{ count }}</div>
</template>

<script>
export default {
  props: ["count"]
};
</script>
