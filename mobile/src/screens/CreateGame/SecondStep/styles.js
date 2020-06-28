import { StyleSheet } from 'react-native';

import { general, colors } from '../../../styles';

export default styles = StyleSheet.create({
  container: general.container,

  titleContainer: general.screenTitleContainer,

  title: general.screenTitle,

  playerPhotos: {
    height: '50%',
    marginHorizontal: 10,
  },

  playerPhotosContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  userAvatarContainer: {
    width: 75,
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 15,
  },

  activeOverlay: {
    width: 55,
    height: 55,
    opacity: 0.8,
    borderRadius: 55 / 2,
    backgroundColor: colors.buttonsLightBlue,
  },

  userAvatar: {
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
  },

  playerName: {
    fontSize: 12,
    marginTop: 2,
    textAlign: 'center',
  },

  helpTextContainer: {
    marginTop: 15,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  helpTextHeader: {
    color: colors.black,
    fontSize: 22,
    textAlign: 'center',
  },

  helpText: {
    color: colors.midGray,
    fontSize: 18,
    marginTop: 5,
    textAlign: 'center',
  },

  progressStatusContainer: general.progressStatusContainer,

  progressStatus: general.progressStatus,

  helpTextContainer: general.helpTextContainer,

  helpTextHeader: general.helpTextHeader,

  helpText: general.helpText,

  nextStepButton: {
    ...general.fullWidthButton,
    flex: 2,
    marginBottom: 0,
  },

  backButton: {
    ...general.fullWidthButton,
    backgroundColor: colors.background,
    marginTop: 10,
    marginBottom: 15,
  },

  nextStepButtonText: general.fullWidthButtonText,
});
