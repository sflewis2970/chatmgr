import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    searchInputContainer: {
      flex: .1,
      padding: 3,
      margin: 3,
      justifyContent: "center",
      borderWidth: 1
    },
    searchInput: {
      height: 40,
      margin: 2,
      borderWidth: 2
    },
    contactListContainer: {
      flex: .8,
      padding: 3,
      margin: 3,
      borderWidth: 1
    },
    contactListItem: {
      height: 40,
      margin: 2,
      justifyContent: "center",
      borderWidth: 2
    },    
    btnContainer: {
      flex: .1,
      margin: 3,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1
    },
    btnText: {
      color: "green",
      fontFamily: 'normal',
      fontWeight: 'bold',
      fontSize: 14
    },
});
