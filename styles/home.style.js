import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
    paddingTop: 6,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationIcon: {
    height: 28,
    width: 28,
    marginLeft: -6,
  },
  headerText: {
    fontFamily: "MontserratMedium",
  },
  headerCartWrapper: {
    position: "relative",
  },
  headerCart: {
    height: 28,
    width: 28,
  },
  cartItemNumberWrapper: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 20,
    height: 20,
    backgroundColor: "green",
    borderRadius: 10,
  },
  cartItemNumber: {
    position: "absolute",
    color: "white",
    display:"flex",
    alignSelf: "center"
  },
  homeHeader: {
    marginVertical: 18,
  },
  homeHeaderImg: {
    borderRadius: 18,
    width: 300,
    height: 150,
    marginRight: 18,
  },
  newArrivalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  newArrivalHeaderTxt: {
    fontFamily: "MontserratBold",
    fontSize: 18,
  },
  newArrivalHeaderText: {
    fontFamily: "MontserratMedium",
    fontSize: 18,
  },
  newArrivalRows: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  newArrivalRowsImg: {
    width: 180,
    height: 100,
    borderRadius: 12,
  },
});
