<template>
  <div class="container mx-auto px-4 max-w-screen-xl md:px-0">
    <h2 class="text-2xl mb-10">Bienvenido {{ username }} 👋</h2>
    <div class="grid grid-cols-12 gap-y-10 md:gap-10">
      <CardHome title="Agrega tu repositorio personal" subtitle="Privado o publico" buttonText="Agregar"
        routeName="Agregar proyecto personal" />
      <CardHome title="Explorar repositorios" subtitle="Publicos" buttonText="Buscar" routeName="Explorar proyectos" />
      <CardHome title="Comparar repositorios" subtitle="Privado o publico" buttonText="Buscar" routeName="dashboard" />

      <Card className="col-span-12 relative" v-if="userStore.favoriteProjects?.projects?.length > 0">
        <div class="flex justify-between mb-4 overflow-auto">
          <h4 class="text-sm">Tus Proyectos seleccionados ({{ userStore.favoriteProjects?.projects?.length || 0 }})</h4>
          <router-link class="text-xs font-semibold text-slate-900" :to="{ name: 'Explorar proyectos' }">
            Ver todos los proyectos
          </router-link>
        </div>
        <CompareProjects />
      </Card>
    </div>
  </div>
</template>

<script setup>

import Card from "@/components/Card"
import { useUserStore } from "@/store/user";

import SimpleCard from "@/components/Card/Simple.vue";
import CompareProjects from "@/components/Table/compare.vue";
import CardHome from "@/components/Card/Home/index.vue";


const userStore = useUserStore();
const username = userStore.user?.name;


</script>
