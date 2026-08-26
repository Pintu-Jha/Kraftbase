import React from 'react';
import { Dimensions, PixelRatio } from 'react-native';


const GUIDELINE_BASE_WIDTH = 393;
const GUIDELINE_BASE_HEIGHT = 852;

const MIN_SCALE_FACTOR = 0.85;
const MAX_SCALE_FACTOR = 1.3;

function getWindowDimensions() {
  return Dimensions.get('window');
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function getUniformScaleFactor(): number {
  const { width, height } = getWindowDimensions();
  const widthFactor = width / GUIDELINE_BASE_WIDTH;
  const heightFactor = height / GUIDELINE_BASE_HEIGHT;
  return clamp(Math.min(widthFactor, heightFactor), MIN_SCALE_FACTOR, MAX_SCALE_FACTOR);
}

function getScaleFactor(): number {
  return getUniformScaleFactor();
}

function getVerticalScaleFactor(): number {
  return getUniformScaleFactor();
}

export function scale(size: number): number {
  return PixelRatio.roundToNearestPixel(size * getUniformScaleFactor());
}

export function verticalScale(size: number): number {
  return PixelRatio.roundToNearestPixel(size * getUniformScaleFactor());
}

export function moderateScale(size: number, factor = 0.5): number {
  return PixelRatio.roundToNearestPixel(size + (scale(size) - size) * factor);
}

export function moderateScaleVertical(size: number, factor = 0.5): number {
  return PixelRatio.roundToNearestPixel(size + (verticalScale(size) - size) * factor);
}

export function textScale(figmaFontSize: number, factor = 0.3): number {
  return moderateScale(figmaFontSize, factor);
}

export const { width, height } = getWindowDimensions();

export function useScaledDimensions() {
  const [dims, setDims] = React.useState(getWindowDimensions());

  React.useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDims(window);
    });
    return () => subscription.remove();
  }, []);

  const widthFactor = dims.width / GUIDELINE_BASE_WIDTH;
  const heightFactor = dims.height / GUIDELINE_BASE_HEIGHT;

  return {
    width: dims.width,
    height: dims.height,
    scaleFactor: clamp(Math.min(widthFactor, heightFactor), MIN_SCALE_FACTOR, MAX_SCALE_FACTOR),
  };
}