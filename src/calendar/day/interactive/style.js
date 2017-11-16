import {StyleSheet} from 'react-native';
import * as defaultStyle from '../../../style';
import size from './size'
import colors from './colors'
const STYLESHEET_ID = 'stylesheet.day.interactive';

const FILLER_HEIGHT = size.component_height_calendar(50);

export default function styleConstructor(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      alignItems: 'center',
      alignSelf: 'stretch',
      marginLeft: -1,
      borderLeftWidth:0,
      borderTopWidth:0,
      borderBottomWidth:0,
      borderRightWidth:0,
      borderColor: "#dce4f2",
      marginTop:-7
    },
    base: {
      //borderWidth: 1,
      width: size.component_width_calendar(70),
      height: FILLER_HEIGHT,
      alignItems: 'center',
    },
    fillers: {
      position: 'absolute',
      height: FILLER_HEIGHT,
      flexDirection: 'row',
      left: 0,
      right: 0,
    },
    leftFiller: {
      height: FILLER_HEIGHT,
      flex: 1
    },
    rightFiller: {
      height: FILLER_HEIGHT,
      flex: 1
    },
    text: {
      marginTop: size.margin_t_b(5),
      marginLeft: size.margin_l_r_date(10),
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: '300',
      color: appStyle.dayTextColor || '#2d4150',
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    counttext: {
      marginRight: size.margin_l_r_date(10),
      marginBottom:size.margin_t_b_date(10),
      fontSize: size.font(12),
      fontFamily: appStyle.textDayFontFamily,
      color: appStyle.dayTextColor || '#2d4150',
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    todayText: {
      fontWeight: '500',
      color: theme.todayTextColor || appStyle.dayTextColor,
      //color: appStyle.textLinkColor
    },
    disabledText: {
      color: appStyle.textDisabledColor
    },
    quickAction: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#c1e4fe'
    },
    quickActionText: {
      marginTop: 6,
      color: appStyle.textColor
    },
    firstQuickAction: {
      backgroundColor: appStyle.textLinkColor
    },
    firstQuickActionText: {
      color: 'white'
    },
    naText: {
      color: '#b6c1cd'
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
