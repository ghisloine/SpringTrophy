<template>
  <div class="about">
    <input type="text" v-model="name">
    <button @click="submitName">Add</button>
    <input type="text" v-model="surname">
    <button @click="submitSurname">Add Surname</button>
    <div>
      <ul>
        <li v-for="personName of names" v-bind:key="personName['.key']">
          {{personName.name}}
        </li>
      </ul>
      <ul>
        <li v-for="personSurname of surname" v-bind:key="personSurname['.key']">
          {{personSurname.surname}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { namesRef } from "../firebase";
import { surnameRef } from "../firebase";
export default {
  data(){
    return{
      name : 'Paul',
      surname : 'Tagtekin',
      Nameler : []
    }
  },
  methods : {
    submitName(){
      namesRef.push({
        name : this.name,
           
      })
    },
    submitSurname(){
      surnameRef.push({
        surname : this.surname
      })
    }
  },
  firebase : {
    names : namesRef.orderByChild("name"),//Bu sekilde veriyi duzenliyebiliyoruz !
    surname : surnameRef
    
  }
}
</script>
