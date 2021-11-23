<template>
    <tr>
        <th scope="row">{{ numero }}</th>
        <td>{{ appelation }}</td>
        <td>{{ user_github }}</td>
        <td>{{ email }}</td>
        <td>{{ poste }}</td>
        <td class="flex">
            <router-link class="nav-link" :to="{ name: 'show',params:{id:id}}"><i class="fas fa-eye"></i></router-link>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'ListItem',
    props: {
        id:{
            type:Number,
            required:true,
        },
        numero:{
            type:Number,
            required:true,
        },
        appelation: {
            type: String,
            required: true
        },
        user_github: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        poste: {
            type: String,
            required: true
        },
    },
}
</script>

<style scoped>
.flex{
    display: flex;
    flex-direction: row;
}
</style>
