import { StyleSheet } from 'react-native';

import { general, colors } from '../../styles';

export default styles = StyleSheet.create({
  container: general.container,

  firstRow: {
    flex: 0.8,
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },

  logoutContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 15,
    alignItems: 'center',
  },

  logoutIcon: {
    fontSize: 32,
    color: colors.logoutRed,
  },

  logoutText: {
    fontSize: 17,
    textAlign: 'center',
    color: colors.logoutRed,
  },

  logo: {
    flex: 1,
    marginRight: 15,
  },

  firstRowSpacer: {
    flex: 1,
  },

  basicInformationRow: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  basicInformation: {
    fontSize: 14,
  },

  playerPhotoName: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  playerPhoto: {
    width: 115,
    height: 115,
    borderRadius: 115 / 2,
  },

  playerName: {
    fontSize: 18,
  },

  mainInfoContainer: {
    flex: 3,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainInfo: {
    flex: 1,
    flexDirection: 'row',
    width: 280,
    borderTopWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  mainInfoText: {
    fontSize: 14,
    marginLeft: 6,
  },

  mainInfoIcon: {
    fontSize: 18,
  },

  mainInfoLast: {
    borderBottomWidth: 1,
  },

  spacer: {
    flex: 0.3,
  },

  editInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.buttonsLightBlue,
  },

  editInfoText: {
    fontSize: 25,
  },

  bottomNavbar: {
    flex: 1,
    backgroundColor: colors.buttonsLightBlue,
  },
});
