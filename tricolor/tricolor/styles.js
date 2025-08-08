import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    area1:{
        flex: 3,
        backgroundColor: 'pink',
        alignItems:'center',
        justifyContent:'center'
    },
    area2:{ 
        flex: 2,
        backgroundColor:'#b19bd9',
        alignItems:'center',
        justifyContent:'center'
    },
    area3:{
        flex: 5,
        backgroundColor:'#A7C7E7',
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:50,
        fontWeight:'bold',
        fontStyle:'italic',
        color:'#fff'
    }
});