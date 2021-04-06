import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CBC3E3',
        alignItems: 'center',
        paddingTop: '20%'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#4B0082"
    },
    input: {
        height: 45,
        width: 210,
        borderWidth: 2,
        margin: 10,
        borderColor: "#009688",
        padding: 10,
        borderRadius: 20
    },
    btnContainer: {
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    btnText: {
        fontSize: 15,
        color: "white",
    },
    todoContainer: {
        paddingTop: 18,
        height: 250,
    },
    todoItemBar: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "center",
        borderWidth: 1,
        fontSize: 15,
        padding: 8,
        margin: 6,
        width: 'auto',
        borderColor: "#009688",
        backgroundColor: "#D8BFD8",
        color: "#4B0082",
        fontWeight: "600",
        borderRadius: 10,
    },
    todobtnsContainer: {
        flexDirection: "row",
        alignItems: "flex-end",
    },
    todoBtns: {
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginLeft: 8
    },
    todoBtnText: {
        color: "white"
    }
});

export default style;