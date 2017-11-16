const React = require("react-native");
const { Platform } = React;
const Device = require('react-native-device-detection');

exports.font = (size) => {
    if (Device.isTablet) {
        return size + 2
    }
    return size
}
exports.margin_l_r = (margin) => {
    if (Device.isTablet) {
        return margin + 20
    }
    return margin
}
exports.margin_t_b = (margin) => {
    if (Device.isTablet) {
        return margin + 10
    }
    return margin
}
exports.margin_l_r_date = (margin) => {
    if (Device.isTablet) {
        return margin + 50
    }
    else{
        return margin 
    }
}
exports.margin_t_b_date = (margin) => {
    if (Device.isTablet) {
        return margin + 40
    }
    return margin
}
exports.component_height_calendar = (height) => {
    if (Device.isTablet) {
        return height + 50
    }
    else{
        return height 
    }
}
exports.component_width_calendar = (width) => {
    if (Device.isTablet) {
        return width + 30
    }
    else{
        return width 
    }
}