<template>
    <v-main>
        <v-layout>
            <v-flex>
                <v-btn>Texto</v-btn>

                <v-btn color="primary">Texto</v-btn>

                <v-btn  dark color="blue">Texto</v-btn>
                
                <v-btn  color="secondary" text>Sin fondo</v-btn>

                <v-btn  color="warning" large>Largo</v-btn>

                <v-btn  color="secondary" small>small</v-btn>

                <v-btn  color="secondary" large :disabled="false">Disabled false</v-btn>

                <v-btn  color="secondary" large :disabled="true">Disabled true</v-btn>

                <v-btn  color="error" depressed>Botón</v-btn>

                <v-btn>
                    <v-icon>mdi-alarm</v-icon>
                </v-btn>

                 <v-btn color="primary">
                    <v-icon>mdi-domain</v-icon>
                </v-btn>

                <v-btn>
                    <v-icon>mdi-lock</v-icon>
                </v-btn>

                <v-btn color="error" icon text>
                    <v-icon>mdi-lock</v-icon>
                </v-btn>

                <v-btn color="error" fab>
                    <v-icon>mdi-lock</v-icon>
                </v-btn>

                <v-btn color="error" fab small>
                    <v-icon>mdi-lock</v-icon>
                </v-btn>

                <v-btn color="error" fab large>
                    <v-icon>mdi-lock</v-icon>
                </v-btn>

                <v-btn color="success">
                    Texto
                    <v-icon>mdi-lock</v-icon>
                </v-btn>

                <v-btn color="info">
                    Texto
                    <v-icon class="ml-2">mdi-lock</v-icon>
                </v-btn>

                <v-btn color="info">
                    Texto
                    <v-icon right>mdi-lock</v-icon>
                </v-btn>

                <v-btn color="success">
                    <v-icon left>mdi-lock</v-icon>
                    Texto
                </v-btn>

                <v-btn color="success" outlined>
                    <v-icon left>mdi-forum</v-icon>
                    button outlined
                </v-btn>

                <v-btn color="success" outlined block>
                    <v-icon left>mdi-forum</v-icon>
                    block button
                </v-btn>

            </v-flex>
        </v-layout>
    </v-main>
</template>

<script>
    export default {
        data(){
            return{

            }
        }
    }
</script>