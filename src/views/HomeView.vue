<script setup>
import { mdiInstagram, mdiTwitch, mdiTwitter, mdiCheck } from '@mdi/js'
</script>

<template>
  <main class="bg-grey-darken-4 h-100">
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="text-center" style="margin-top: 128px">
          <v-avatar size="256">
            <v-img cover src="avatar.jpg" alt="John"></v-img>
          </v-avatar>
          <div class="d-flex justify-center align-center mt-6">
            <h1>@maffinca69</h1>
            <v-icon size="24" class="ml-2">{{ mdiCheck }}</v-icon>
          </div>
        </v-col>
        <v-col cols="12" class="d-flex justify-center align-center mb-16" style="gap: 32px">
          <v-btn theme="dark" icon href="https://instagram.com" target="_blank">
            <v-icon size="32"> {{ mdiInstagram }}</v-icon>
          </v-btn>
          <v-btn theme="dark" icon href="https://instagram.com" target="_blank">
            <v-icon size="32"> {{ mdiTwitch }}</v-icon>
          </v-btn>

          <v-btn theme="dark" icon href="https://instagram.com" target="_blank">
            <v-icon size="32"> {{ mdiTwitter }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container style="max-width: 1800px">
      <v-row>
        <v-col
          cols="6"
          sm="4"
          md="3"
          v-for="i in 10"
          :key="i"
          class="d-flex align-center justify-center"
        >
          <v-img
            cover
            class="rounded"
            aspect-ratio="1"
            transition="fade"
            width="300"
            height="300"
            :src="`https://loremflickr.com/320/240`"
          >
            <template v-slot:placeholder>
              <v-skeleton-loader color="grey-darken-3" type="image, image"></v-skeleton-loader>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>
