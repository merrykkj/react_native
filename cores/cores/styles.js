import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },

    row: {
        flex: 1,
        flexDirection: 'row'
    },

    area1:{
        flex: 3,
        backgroundColor: 'pink',
        alignItems:'center',
        justifyContent:'center'
    },
    area2:{ 
        flex: 3,
        backgroundColor:'#b19bd9',
        alignItems:'center',
        justifyContent:'center'
    },
    area3:{
        flex: 3,
        backgroundColor:'#A7C7E7',
        alignItems:'center',
        justifyContent:'center'
    },
    area4:{
        flex: 3,
        backgroundColor:'#a467e0',
        alignItems:'center',
        justifyContent:'center'
    },
    area5:{
        flex: 3,
        backgroundColor:'#b04646',
        alignItems:'center',
        justifyContent:'center'
    },
    area6:{
        flex: 3,
        backgroundColor:'#8ae880',
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