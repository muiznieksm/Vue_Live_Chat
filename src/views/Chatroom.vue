<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import ChatWindow from "@/components/ChatWindow.vue";
import Navbar from "@/components/Navbar.vue";
import NewChatForm from "@/components/NewChatForm.vue";
import { projectAuth } from "@/firebase/config";
import router from "@/router";

export default {
  components: { Navbar, NewChatForm, ChatWindow },
  setup() {
    projectAuth.onAuthStateChanged((user) => {
      if (!user) {
        router.push({ name: "Welcome" });
      }
    });
  },
};
</script>

<style></style>
