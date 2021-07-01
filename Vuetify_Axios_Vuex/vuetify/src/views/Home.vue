<template>
    <v-container grid-list-md>
        <v-layout row wrap> 
            <v-flex xs12 sm6>
                <v-card>
                    <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"
                    >
                        <v-container>
                            <v-layout>
                                <v-flex class="headline white--text">
                                    <span>Lorem, ipsum dolor.</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    
                    <v-card-title>Lorem, ipsum dolor.</v-card-title>
                    
                    <v-card-text>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                        </p>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color ="info" text>
                            Acción
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm6>
                <v-card>
                    <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"
                    ></v-img>
                    
                    <v-card-title>Lorem, ipsum dolor.</v-card-title>
                    
                    <v-card-text>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                        </p>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color ="info" text>
                            Acción
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
    
</template>

<script>
    export default {
        
    }
</script>