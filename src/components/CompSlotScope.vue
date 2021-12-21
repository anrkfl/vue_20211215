<template>
    <div>
        <h4>부모 : CompSlotScope.vue</h4>
        <comp-4 :data="title">
            <template #tag1="slotProps">
                {{slotProps.user.firstname}}<br />
                {{slotProps.user.lastname}}<br />

                <span>전달되어 표시되는 태그들
                    <br />
                </span>
            </template>
        </comp-4>

    </div>
</template>

<script>


import Comp4 from './comp/Comp4.vue'
    export default {
        components: { 
            Comp4 
        },

        data(){
            return{
                title : 'aaa',
            }
        }
        
    }
</script>

<style scoped>

</style>