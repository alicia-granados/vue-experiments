<template>
  <div id="app" class= "container">
    
    <Cabecera></Cabecera>
    <listGroup></listGroup>
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue'
import ListGroup from './components/ListaGroup.vue'

export default {
  name: 'App',
  components: {
    Cabecera,
    ListGroup
  }
}
</script>

