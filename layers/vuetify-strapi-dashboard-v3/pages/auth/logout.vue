<template>
  <nuxt-layout name="vsd-auth">
    <user-vsd-strapi-logout-box @action="logout"></user-vsd-strapi-logout-box>
  </nuxt-layout>
</template>

<script setup>

definePageMeta({
  middleware: 'authenticated'
});

// Sending event
function logout() {
  useLogout()
}
</script>
